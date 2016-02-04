
exports.handleSuccess = function (req, res, next) {
	if(res.result === 'undefined')	{
		next();
	}
	var resObject = {
		status:200,
		data:res.result,
		message:"ok"
	}
	return res.json(resObject);
};

exports.errorHandler = function (req, res, next) {
	return res.json(resObject);
};

module.exports.responseObject = function(statusCode, message, result){
	return	{
		statusCode: statusCode ? statusCode : 200,
		message: message ? message : "ok",
		result: result ? result : {}
	}
}