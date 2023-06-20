const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  dob: { type: Date, required: true },
  oib: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  drivingLicenseNumber: { type: String, required: true },
  password: { type: String, required: true },
  loginToken: { type: String }
});

module.exports = mongoose.model('UserModel', userSchema);

