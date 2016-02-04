var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
  email: { type: String, required: true },
  username :  { type: String, required: true, trim: true },
  password : { type: String, required: true },
  lastlogin_At : { type: Date }
});

groupSchema.plugin(timestamps);

module.exports = mongoose.model('Users',userSchema);
