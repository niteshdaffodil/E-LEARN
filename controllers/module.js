var Module = require('../models/modules');
var Lesson = require('../models/lessons');
var helper = require('../helper/response');
var validator = require('validator');

module.exports = {
	addModule : function(req, res, next){
		Module.findOne({name:req.body.name})
		.then(function(module){
			if(!module){
				(new Module(req.body)).save(function(err, module){
					if(err){
						res.json(helper.responseObject(422, err, null, true));
					}else {
						req.result = module;
						next();				
					}
				});
			}else{
				throw({message:"Module name must be unique"});
			}
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err, null, true));
		});
	},
	getModule : function(req, res, next){
		if(validator.isMongoId(req.params.id)){
			Module.findOne({_id:req.params.id,deleted:false})
			.then(function(module){
				req.result = module;
				next();
			})
			.catch(function(err){
				res.json(helper.responseObject(422, err, null, true));
			})
		}else{
			res.json(handler.handleError(404, "Not Found"));
		}
	},
	getAllModule : function(req, res, next){
		Module.find({deleted:false})
		.then(function(modules){
			req.result = modules;
			next();
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err, null, true));
		})
	},
	getModuleLessions: function(req, res, next){
		Lesson.find({module:req.params.id})
		.then(function(lessons){
			req.result = lessons;
			next();
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err, null, true));
		})
	}
}