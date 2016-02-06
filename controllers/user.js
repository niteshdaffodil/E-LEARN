var User = require('../models/users');
var helper = require('../helper/response');
module.exports = {
	signup : function(req, res, next){
		(new User(req.body)).save()
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
		User.find({email:req.params.email})
		.then(function(user){
			if(!user){
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
	}
}