var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actionSchema = Schema({
  lesson : { type: Schema.Types.ObjectId, ref: 'Lessons', required: true },
  description : { type: String, required: true required: true },
  deleted : { type: Boolean, default: false }
});

module.exports = mongoose.model('Modules',actionSchema);