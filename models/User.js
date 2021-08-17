const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
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
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    dba: {
        type: String,
        required: true
    },
    patients: {
      type: Object
    }
  }, {
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema)
