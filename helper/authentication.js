var jwt = require('jwt-simple');
var config = require('../config/config');
var helper = require('./response');

module.exports = {
	authentication: function(req, res, next) {
		var token = jwt.encode({
		  iss: 12345678,
		  exp: 124234
		}, config.keys.jwtTokenSecret);
		req.token = token;
		next();
	},
	authValidation: function(req, res, next){
		var token = req.token;
		if (token) {
			try {
				var decoded = jwt.decode(token, app.get('jwtTokenSecret'));
				console.log("decoded",decoded);
				req.token = decoded;
				if (decoded.exp <= Date.now()) {
  					res.json(helper.responseObject(400, 'Access token has expired', null));
				}
				next();
			} catch (err) {
				res.json(helper.responseObject(401, 'unauthorized', null));
			}
		} else {
			res.json(helper.responseObject(401, 'unauthorized', null));
		}
	}
}