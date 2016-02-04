var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userGroupSchema = Schema({
  group : { type: Schema.Types.ObjectId, ref: 'Groups', required: true },
  user : { type: Schema.Types.ObjectId, ref: 'Users', required: true },
});

module.exports = mongoose.model('UserGroup',userGroupSchema);