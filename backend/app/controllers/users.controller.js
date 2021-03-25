var MongoClient = require('mongodb').MongoClient;
const { masterConnection } = require("../../config/database.config");
const { Users } = require("../models/users.model");
const { validationResult } = require('express-validator/check');

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
        user_name: req.body.user_name
    });
    adduser.save()
        .then((data) => {
            res.status(200).json({
                data
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