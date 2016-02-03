module.exports.index = function(req, res, next) {
  var obj = {
  	token: res.token,
  	name: "NITESH"
  }
  res.render('index', { title: 'Express' });
}

module.exports.token = function(req, res, next) {

  var obj = {
  	token: res.token,
  	name: "NITESH"
  }

  res.json(obj);
}