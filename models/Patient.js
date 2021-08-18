const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema ({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  diagnoses: {
    type: Array
  },
  medications: {
    type: Array
  },
  allergies: {
    type: Array
  },
  visits: {
    type: Object,
    required: true
  }
}, {
  timestamps: true
})

module.exports = Patient = mongoose.model('Patient', PatientSchema)
