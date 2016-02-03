var jwt = require('jwt-simple');
var config = require('../config/config');



module.exports = {
	authentication: function(req, res, next) {
		var token = jwt.encode({
		  iss: 12345678,
		  exp: 124234
		}, config.keys.jwtTokenSecret);
		res.token = token;
		next();
	},
	authValidation: function(req, res, next){
		var token = res.token;
		if (token) {
			try {
				var decoded = jwt.decode(token, app.get('jwtTokenSecret'));
				console.log("decoded",decoded);
				res.token = decoded;
				if (decoded.exp <= Date.now()) {
  					res.json({message:'Access token has expired', status:400, error:true});
				}
				next();
			} catch (err) {
				res.json({message:'Access token has expired', status:400, error:true});
			}
		} else {
			next();
		}
	}
}