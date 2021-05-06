const router = require("express").Router();
module.exports = (app) => {
    const { body, validationResult } = require('express-validator');
    const form = require('../form/user_validation');
    const users = require('../controllers/users.controller');

    // Create new Collection
    app.post('/api/v1/userReg', form.userRegistration, users.createUsers);

    // Get users
    app.get('/api/v1/getUser', users.getUsers);

    // Get User By Id
    app.post('/api/v1/userLogin', users.userLogin);

    app.put('/api/v1/userDetailChange/:_id', users.changeDetail);

}
module.exports.user_setting = router;