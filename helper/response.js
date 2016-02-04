
responseHelper = {
	handleSuccess : function (req, res, next) {
		
		var resData = { result: req.result, token: req.token ? req.token : null }
		res.json(responseHelper.responseObject(200, "ok", resData));
	
	},

	errorHandler : function (req, res, next) {
		//return res.json(resObject);
	},

	responseObject : function(statusCode, message, result){
		return	{
			statusCode: statusCode ? statusCode : 200,
			message: message ? message : "ok",
			result: result ? result : {}
		}
	}
}

module.exports = responseHelper;