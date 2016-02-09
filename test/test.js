var assert = require('chai').assert;

describe("Response Handler",function(){
	var helper = require('../helper/response');
	it("should return object with length faur",function(done){
		assert.equal(Object.keys(helper.responseObject()).length,4);
		done();
	});
	it("should return object with status code 200",function(done){
		assert.equal(helper.responseObject().statusCode,200);
		done();
	});
	it("should return object with message is ok",function(done){
		assert.equal(helper.responseObject().message,"ok");
		done();
	});
	it("should return object with status code 200 if we pass only one argument with 200",function(done){
		assert.equal(helper.responseObject(200).statusCode,200);
		done();
	});
	it("should return object with message is ok if we pass second argument ok",function(done){
		assert.equal(helper.responseObject(null, "ok").message,"ok");
		done();
	});
});