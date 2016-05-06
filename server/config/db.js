const mongoose = require('mongoose');

function connect() {
  mongoose.connect('mongodb://localhost:27017/Contacts');
}

module.exports = connect;
