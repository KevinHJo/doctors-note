const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema = new Schema ({
  fname: {
    type: String,
    require: true
  },
  lname: {
    type: String,
    require: true
  },
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  address: {
    type: String,
    require: true
  },
  dateOfBirth: {
    type: Date,
    require: true
  },
  sex: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  diagnoses: {
    type: Array
  },
  medications: {
    type: Array
  },
  allergies: {
    type: Array
  }
}, {
  timestamps: true
})
