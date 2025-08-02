const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // No two users can share the same email
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    default: 'Welcome to my profile!', // A default value
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);