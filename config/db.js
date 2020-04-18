const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-zvtoj.mongodb.net/test?retryWrites=true&w=majority`;
// const config = require('config');
// const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });
    console.log('Mongo DB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
