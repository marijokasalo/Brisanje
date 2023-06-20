const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  birthdate: Date,
  oib: String,
  email: String,
  phone: String,
  address: String,
  driverLicense: String,
  password: String,
});

module.exports = mongoose.model('User', UserSchema);
