var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var unitSchema = Schema({
  name : { type: String, required: true, trim: true },
  description : { type: String, required: true },
  deleted : { type: Boolean, default: false }
});

module.exports = mongoose.model('Unit',unitSchema);