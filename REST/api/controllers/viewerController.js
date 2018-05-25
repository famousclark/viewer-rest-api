var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var viewerSchema = new Schema({
  id:{
    type: Number,
    required: true
  },

  threeFile:{
    type: String
  },

  threeThumbnail:{
    type: String
  },

  skybox:{
    file:{
      type: String,
      required: true
    }
  },

  enableLight:{
    type: Boolean,
    required: true
  },

  enableMaterials:{
    type: Boolean,
    required: true
  },

  enableShaders:{
    type: Boolean,
    required: true
  },

  enableMeasurement:{
    type: Boolean,
    required: true
  },

  enableUnits:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('viewerTasks', viewerSchema);
