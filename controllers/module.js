var Module = require('../models/modules');
var Lesson = require('../models/lessons');
var helper = require('../helper/response');
module.exports = {
	addModule : function(req, res, next){
		Module.findOne({name:req.body.name})
		.then(function(Module){
			if(!Module){
				(new Module(req.body)).save()
				.then(function(Module){
					req.result = Module;
					next();
				})
			}else{
				throw({message:"Module name must be unique"});
			}
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err.message, null));
		});
	},
	getAllModule : function(req, res, next){
		Module.find({})
		.then(function(Modules){
			req.result = Modules;
			next();
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err.message, null));
		})
	},
	getModuleLessions: function(req, res, next){
		Lesson.find({Module:req.params.id})
		.then(function(lessons){
			req.result = lessons;
			next();
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err.message, null));
		})
	}
}