var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var actionItemSchema = Schema({
  group : { type: Schema.Types.ObjectId, ref: 'Groups', },
  user : { type: Schema.Types.ObjectId, ref: 'Users', required: true },
  lesson : { type: Schema.Types.ObjectId, ref: 'Lessons', required: true },
  deleted : { type: Boolean, default: false }
});

actionItemSchema.plugin(timestamps);

module.exports = mongoose.model('ActionItems',actionItemSchema);