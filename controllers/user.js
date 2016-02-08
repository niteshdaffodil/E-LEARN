var User = require('../models/users');
var helper = require('../helper/response');
var validator = require('validator');

module.exports = {
	validateData: function(req, res, next){

		if(! validator.isEmail(req.body.email)){
			res.json(helper.responseObject(422, 'email invalid', null, true));
		}else if(! ((req.body.name).length > 2) ){
			res.json(helper.responseObject(422, 'name invalid', null, true));
		}else if(! validator.isDate(req.body.dob)){
			res.json(helper.responseObject(422, 'Date invalid',  null, true));
		}else if(! ((req.body.password).length > 5) ){
			res.json(helper.responseObject(422, err, 'password invalid', true));	
		}else{
			next();
		}
	},
	signup : function(req, res, next){
		var newUser = new User();
		newUser.local.email = req.body.email;
		newUser.local.name = req.body.name;
		newUser.local.password = req.body.password;
		newUser.local.dob = req.body.dob;
		newUser.save()
		.then(function(user){
			console.log("user",user)
			req.result = user;
			next();
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err, null, true));
		});
	},
	validateEmail : function(req, res, next){

		if(validator.isEmail(req.body.email)){
			User.find({'local.email':req.body.email})
			.then(function(user){
				if(!user.length){
					req.result = { message:"varified" };
					next();
				}else {
					req.result = { message:"email already registered"};
					next();
				}
			})
			.catch(function(err){
				res.json(helper.responseObject(422, err, null, true));
			})
		}else {
			res.json(helper.responseObject(422, 'email invalid', null, true));
		}
	}
}