var express = require('express');
var userController = require('../controllers/user');
var auth = require('../helper/authentication');
var helper = require('../helper/response');
var router = express.Router();
/* GET users listing. */
router.post('/', userController.signup, auth.authentication, helper.handleSuccess);

module.exports = router;
