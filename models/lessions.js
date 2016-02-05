var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lessionSchema = Schema({
  unit : { type: Schema.Types.ObjectId, ref: 'Unit', required: true },
  name : { type: String, required: true},
  basic_description : { type: String, required: true},
  detailed_description : String,
  action_description : String,
  deleted : { type: Boolean, default: false }
});

module.exports = mongoose.model('Lessions',lessionSchema);