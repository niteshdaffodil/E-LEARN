// Created By "Nitesh" on 03/02/2016
var moment = require('moment');

module.exports = {
	server: {
		port: 3000
	},
	keys: {
		tokenExpireTime : moment().add(1, 'days').valueOf(),
		jwtTokenSecret : 'YOUR_SECRET_STRING_ELEANING'
	},
	database : {
		address : 'mongodb://localhost/ELEARN'
	}
};
