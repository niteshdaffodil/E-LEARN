var express = require('express');
var unitController = require('../controllers/unit');
var auth = require('../helper/authentication');
var helper = require('../helper/response');
var router = express.Router();
/* GET users listing. */
router.post('/',[unitController.addUnit,helper.handleSuccess]);

module.exports = router;