const mongoose = require('mongoose');

const cargoSchema = mongoose.Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
  // Add all the other fields you need
});

module.exports = mongoose.model('Cargo', cargoSchema);
