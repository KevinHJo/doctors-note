const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
  subjective: {
    type: String,
    required: true
  },
  objective: {
    type: String,
    required: true
  },
  assessment: {
    type: String,
    required: true
  },
  plan: {
    type: String,
    required: true
  },
  patientId: {
    type: Schema.Types.ObjectId,
    ref: 'patients'
  }
}, {
  timestamps: true
});

module.exports = Visit = mongoose.model('Visit', VisitSchema)