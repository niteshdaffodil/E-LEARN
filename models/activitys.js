var timestamps = require('mongoose-timestamp');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = Schema({
  my_groups : { type: Boolean, default: false },
  my_community : { type: Boolean, default: false },
  user : { type: Schema.Types.ObjectId, ref: 'Users' },
  lesson : { type: Schema.Types.ObjectId, ref: 'Lessons', required: true },
  description : { type: String, required: true},
  type : { type: String, required: true},
  url : { type: String },
  likes : [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  deleted : { type: Boolean, default: false }
});

activitySchema.plugin(timestamps);

module.exports = mongoose.model('Activity',activitySchema);