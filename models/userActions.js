var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userActionSchema = Schema({
  user : { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  action : [{ type: Schema.Types.ObjectId, ref: 'Actions', required: true }],
  deleted : { type: Boolean, default: false }
});

module.exports = mongoose.model('UserActions',userActionSchema);