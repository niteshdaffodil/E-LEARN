var express = require('express');
var lessonController = require('../controllers/lesson');
var auth = require('../helper/authentication');
var helper = require('../helper/response');
var router = express.Router();
/* GET users listing. */
router.post('/',[lessonController.addLesson,helper.handleSuccess]);
router.get('/',[lessonController.getAllLesson,helper.handleSuccess]);
router.get('/:id',[lessonController.getLesson,helper.handleSuccess]);

module.exports = router;