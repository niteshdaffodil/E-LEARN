var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groupSchema = Schema({
  name : { type: String, required: true }
});

groupSchema.plugin(timestamps);

module.exports = mongoose.model('Groups',groupSchema);