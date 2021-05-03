var MongoClient = require('mongodb').MongoClient;
const { masterConnection } = require("../../config/database.config");
const { Users } = require("../models/users.model");
const { validationResult, param, cookie } = require('express-validator/check');
const jwt = require('jsonwebtoken');

exports.createUsers = async (req, res) => {
    let isReqValid = await validateRequest(req, res)
    if (!isReqValid) {
        return;
    }
    const adduser = new Users({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        salutation: req.body.salutation,
        contact_no: req.body.contact_no,
        mobile_no: req.body.mobile_no,
        user_name: req.body.user_name,
        email: req.body.email,
        password: req.body.password
    });
    adduser.save()
        .then((data) => {
            const token = jwt.sign({
                userId: data._id,
            }, 'secret', {
                expiresIn: "720h"
            })
            Users.findByIdAndUpdate(data._id, {
                token: token
            }).then((Usrdata) => {
                // Users.findOne({ _id: data._id }).then((datauser) => {
                //     return res.status(200).json({
                //         message: "User Success Register",
                //         datauser
                //     })
                // })
                res.cookie("jwt", token, {
                    expires: new Date(Date.now() + 240000),
                    httpOnly: true
                })
                console.log("jwtttttttttt", cookie);
                return res.status(200).json({
                    message: "User Success Register",
                    Usrdata,
                    token
                })
            }).catch((error) => {
                res.status(400).json({
                    status: "error",
                    error: error.message || error,
                })
            })
        }).catch((error) => {
            res.status(400).json({
                status: "error",
                error: error.message || error,
            })
        })
}

exports.getUsers = async (req, res) => {
    try {
        Users.find().then(userData => {
            return res.status(200).json({
                userData
            })
        });
    } catch (error) {
        throw new Error(error);
    }
}

exports.userLogin = async (req, res) => {
    let isReqValid = await validateRequest(req, res)
    if (!isReqValid) {
        return;
    }
    try {
        Users.findOne({
            email: req.body.email,
            password: req.body.password
        }).then(user => {
            console.log("user found", user);
            const token = jwt.sign({
                userId: user._id,
                email: user.email
            }, 'secret', {
                expiresIn: "720h"
            })
            if (!user) {
                return res.status(404).json({
                    "message": "User Not Found"
                })
            } else {
                return res.status(200).json({
                    "message": "User Login Success",
                    user,
                    token
                })
            }
        })
    } catch (error) {
        throw new Error(error);
    }
}


function validateRequest(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Validation ERRORS", errors.array());
        res.status(400).json({
            message: errors.array()[0].param + " " + errors.array()[0].msg
        });
        return false;
    }
    return true;
}