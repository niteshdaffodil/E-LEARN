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
			res.json(helper.responseObject(422, err.message, null));
		});
	}
}