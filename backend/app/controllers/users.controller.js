var MongoClient = require('mongodb').MongoClient;
const { masterConnection } = require("../../config/database.config");
const { Users } = require("../models/users.model");

exports.createUsers = async (req, res) => {
    console.log("check user data", req.body);
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
            // console.log(error)
            res.status(400).json({
                status: "error",
                error: error.message || error,
            })
        })
}

exports.getUsers = async (req, res) => {
    try {
        // const qb = utils.queryBuilder(req.query);
        // const { filter, skip, limit, sort, projection, population } = qb;
        Users.find().then(userData =>{
            return res.status(200).json({
                userData
            })
        });
    } catch (error) {
        throw new Error(error);
    }
}