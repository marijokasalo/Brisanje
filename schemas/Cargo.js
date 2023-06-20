const mongoose = require('mongoose');

const CargoSchema = new mongoose.Schema({
  name: String,
  surname: String,
  companyName: String,
  companyOIB: String,
  cargoWeight: Number,
  cargoQuantity: Number,
  cargoName: String,
  route: String,
  cargoType: String,
  cargoContents: String,
  transportMethod: String,
  contactEmail: String,
  contactPhone: String,
});

module.exports = mongoose.model('Cargo', CargoSchema);
