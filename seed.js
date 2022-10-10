const mongoose = require("mongoose");
mongoose.Promise = Promise;
require('dotenv').config();
const dateData = require("./seed/data/retrograde.json");
const Dates = require("./models/dates")

mongoose.connect(process.env.DB_URL).then(() => {
  console.log(`connected to ${process.env.DB_URL}`)
  return mongoose.connection.dropDatabase()
  .then(() => {
    return Promise.all([
      Dates.insertMany(dateData)
    ])
  })
}).then(() => {
  console.log('disconnecting')
  mongoose.disconnect()
}).catch(err => {
  console.log(err);
  mongoose.disconnect;
})