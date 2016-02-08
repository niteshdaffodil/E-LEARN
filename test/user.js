var assert = require('chai').assert;
var request = require('superagent');
var config = require('../config/config');
var testData = require('./testData');
var url = config.server.host+':'+config.server.port;

describe("User APIs post: "+url+"/users/validateEmail",function(){
	it("should return an object",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.isObject(res.body);
			done();
		})
	});
	it("should return object with length 4",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.equal(Object.keys(res.body).length,4);
			done();
		})
	});
	it("should return object not array",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.isNotArray(res.body);
			done();
		})
	});
	it("should return object must contain result key",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.property(res.body,'result');
			done();
		})
	});
	it("should return object must contain message key",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.property(res.body,'message');
			done();
		})
	});
	it("should return object must contain statusCode key",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.property(res.body,'statusCode');
			done();
		})
	});
	it("should return object must contain error key",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.property(res.body,'error');
			done();
		})
	});
	it("should return object must contain error key with value false",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.equal(res.body.error,false);
			done();
		})
	});
	it("should return object must contain statusCode key with value 200",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.equal(res.body.statusCode,200);
			done();
		})
	});
	it("should return object must contain message key with value 'ok' ",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.equal(res.body.message,"ok");
			done();
		})
	});
	it("should return object must contain result key with object",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.isObject(res.body.result);
			done();
		})
	});
	it("should return object must contain result key with object and object must have result key",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.property(res.body.result,'result');
			done();
		})
	});
	it("should return object must contain result key with object and object must contain result key",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.property(res.body,'error');
			done();
		})
	});
	it("should return object must contain result key with object and object must contain result key with object ",function(done){
		request
		.post(url+'/users/validateEmail')
		.send({email: 'nitesh@gmail.com'})
		.end(function(err, res){
			assert.isObject(res.body.result.result);
			done();
		})
	});
});