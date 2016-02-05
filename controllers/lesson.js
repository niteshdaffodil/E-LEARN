var Lesson = require('../models/lessons');
var helper = require('../helper/response');
module.exports = {
	addLesson : function(req, res, next){
		Lesson.findOne({name:req.body.name,unit:req.body.unit})
		.then(function(lesson){
			if(!lesson){
				(new Lesson(req.body)).save()
				.then(function(lesson){
					req.result = lesson;
					next();
				})
			}else{
				throw({message:"lesson name must be unique"});
			}
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err.message, null));
		});
	}
}