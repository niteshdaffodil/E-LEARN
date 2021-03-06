var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var DateOnly = require('mongoose-dateonly')(mongoose);
var Schema = mongoose.Schema;

var userSchema = Schema({
	local	: {
		email: { type: String, required: true, unique: true },
		password : { type: String, required: true },
		name : { type: String, required: true },
		dob : { type: String, required: true },
		lastlogin_at : {type: Date, default: Date.now},
		avatar_url : { type: String },
		ambassdor : { type: Boolean, default: false },
		rev : { type: Number, default: 0 },
		deleted : { type: Boolean, default: false }
	}
});

userSchema.plugin(timestamps);

module.exports = mongoose.model('Users',userSchema);
