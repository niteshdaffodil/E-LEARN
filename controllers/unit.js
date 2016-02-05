var Unit = require('../models/units');
var helper = require('../helper/response');
module.exports = {
	addUnit : function(req, res, next){

		(new Unit(req.body)).save()
		.then(function(unit){
			console.log("unit",unit);
			req.result = unit;
			next();
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err.message, null));
		});
	}
}