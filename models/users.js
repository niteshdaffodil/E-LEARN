var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  email: { type: String, required: true, unique: true }	,
  username :  { type: String, required: true, unique: true, trim: true },
  password : { type: String, required: true },
  name : { type: String, required: true },
  age : { type: Date, required: true },
  lastlogin_at : { type: Date },
  avatar_url : { type: String },
  ambassdor : { type: Boolean, default: false },
  rev : { type: Number, default: 0 },
  deleted : { type: Boolean, default: false }
});

userSchema.plugin(timestamps);

module.exports = mongoose.model('Users',userSchema);
