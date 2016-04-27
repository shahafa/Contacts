import mongoose from 'mongoose';

function dbConnect() {
  mongoose.connect('mongodb://192.168.99.100:27017/Contacts');
}

export default dbConnect;
