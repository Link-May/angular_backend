const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessCardSchema = new Schema({
  name: String,
  jobTitle: String,
  email: String,
  phone: String,
  address: String,
  website: String
});

const BusinessCard = mongoose.model('BusinessCard', businessCardSchema);

module.exports = BusinessCard;
