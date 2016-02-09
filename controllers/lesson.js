var Lesson = require('../models/lessons');
var helper = require('../helper/response');
var validator = require('validator');

module.exports = {
	addLesson : function(req, res, next){
		Lesson.findOne({name:req.body.name,module:req.body.module})
		.then(function(lesson){
			if(!lesson){
				(new Lesson(req.body)).save(function(err, lesson){
					if(err){
						res.json(helper.responseObject(422, err, null, true));
					}else {
						req.result = lesson;
						next();				
					}
				})
			}else{
				throw({message:"lesson name must be unique"});
			}
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err.message, null));
		});
	},
	getAllLesson : function(req, res, next){
		Lesson.find({deleted:false})
		.then(function(lessons){
			req.result = lessons;
			next();
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err, null, true));
		})
	},
	getLesson : function(req, res, next){

		if(validator.isMongoId(req.params.id)){
			Lesson.findOne({_id:req.params.id,deleted:false})
			.then(function(lesson){
				req.result = lesson;
				next();
			})
			.catch(function(err){
				res.json(helper.responseObject(422, err, null, true));
			})
		}else{
			res.json(handler.handleError(404, "Not Found"));
		}
	}
}