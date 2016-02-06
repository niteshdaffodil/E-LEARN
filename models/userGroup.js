var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userGroupSchema = Schema({
  group : { type: Schema.Types.ObjectId, ref: 'Groups', required: true },
  user : { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  status : { type:String, enum:['1','2'], default:'1'}
});

module.exports = mongoose.model('UserGroups',userGroupSchema);