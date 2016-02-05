var Unit = require('../models/units');
var helper = require('../helper/response');
module.exports = {
	addUnit : function(req, res, next){
		Unit.findOne({name:req.body.name})
		.then(function(unit){
			if(!unit){
				(new Unit(req.body)).save()
				.then(function(unit){
					req.result = unit;
					next();
				})
			}else{
				throw({message:"unit name must be unique"});
			}
		})
		.catch(function(err){
			res.json(helper.responseObject(422, err.message, null));
		});
	}
}