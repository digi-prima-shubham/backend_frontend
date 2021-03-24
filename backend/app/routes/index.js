const router = require('express').Router();
const { user_setting } = require('./user.route');


router.use('/org',user_setting);

module.exports =  router;