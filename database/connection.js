require('dotenv').config()
const mongoose = require('mongoose');
const { Testmodel } = require("./models/testmodel")

async function connect() {
  mongoose.connect(process.env.DATABASE_CONNECTION, {})
  mongoose.connection.once('open', () => {
    console.log('MongoDB connection established');
    // Create test model
    const testmodel = new Testmodel({
      name: "test-model-1"
    })
    testmodel.save().then(val => {
      console.log("Test model created");
    })
  }).on('error', (err) => {
    console.log('MongoDB connection error : ', err);
  })
}

module.exports = { connect };