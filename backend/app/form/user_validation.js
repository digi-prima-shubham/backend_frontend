const {check} = require('express-validator/check');
const constant = require('../constant/constants');
const {body, validationResult} = require("express-validator");


exports.userRegistration = [
    body('firstname').not().isEmpty().withMessage(constant.blank_error),
    body('lastname').not().isEmpty().withMessage(constant.blank_error),
    body('salutation').not().isEmpty().withMessage(constant.blank_error),
    body('contact_no').not().isEmpty().withMessage(constant.blank_error),
    body('mobile_no').not().isEmpty().withMessage(constant.blank_error),
    body('user_name').not().isEmpty().withMessage(constant.blank_error)
]