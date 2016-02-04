var express = require('express');
var router = express.Router();
var controller = require('../controllers/action.js');
var helperAuth = require('../helper/authentication.js')

/* GET home page. */
router.get('/', [helperAuth.authentication,controller.index]);
router.get('/setToken', [helperAuth.authentication,controller.token]);
router.get('/getToken', [helperAuth.authentication,helperAuth.authValidation,controller.token]);
module.exports = router;