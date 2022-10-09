const mongoose = require("mongoose");
mongoose.Promise = Promise;
require('dotenv').config();

mongoose.connect(process.env.DB_URL).then(() => {
  console.log(`connected to ${process.env.DB_URL}`)
  console.log(mongoose.connection.db)
}).then(() => {
  console.log('disconnecting')
  mongoose.disconnect()
})