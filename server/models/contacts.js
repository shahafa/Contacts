const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  idNumber: String,
  firstName: String,
  lastName: String,
  phone: String
}, {
  collection: 'Contacts'
});

const contacts = mongoose.model('Contacts', contactSchema);

module.exports = contacts;
