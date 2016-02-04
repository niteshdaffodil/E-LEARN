var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actionItemSchema = Schema({
  group : { type: Schema.Types.ObjectId, ref: 'Groups', },
  user : { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  lession : { type: Schema.Types.ObjectId, ref: 'Lessions', required: true },
});

groupSchema.plugin(timestamps);

module.exports = mongoose.model('ActionItems',actionItemSchema);