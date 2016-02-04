module.exports.token = function(req, res, next) {

  var obj = {
  	token: res.token,
  	name: "NITESH"
  }

  res.json(obj);
}