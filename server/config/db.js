const mongoose = require('mongoose');

function connect() {
  mongoose.connect('mongodb://192.168.99.100:27017/Contacts');
}

module.exports = connect;
