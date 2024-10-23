const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect(process.env.ATLAS_URI);
    console.log('Successfully connected to MongoDB...'.green.bold);
  } catch (error) {
    console.log('We could not connect to mongoDB'.red.underline, error);
  }
}


module.exports = connectToDB