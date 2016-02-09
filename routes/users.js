var express = require('express');
var userController = require('../controllers/user');
var auth = require('../helper/authentication');
var helper = require('../helper/response');
var router = express.Router();
/* GET users listing. */
router.post('/', userController.validateData,userController.signup,auth.authentication,helper.handleSuccess);
router.get('/:email',userController.validateEmail,helper.handleSuccess);

module.exports = router;
