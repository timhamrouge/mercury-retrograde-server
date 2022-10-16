const express = require('express')
const app = express()

const mongoose = require("mongoose");
mongoose.Promise = Promise;
require('dotenv').config();

const {getRetrogradeByDate, getRetrogradeTweetByDate} = require("./controllers/retrogradeController")

app.use(express.json());

mongoose.connect(process.env.DB_URL).then(() => {
  console.log(`connected to ${process.env.DB_URL}`);
});

app.get('/', function (req, res) {
  res.send('Hello Timbo')
})

app.get('/retrograde', getRetrogradeByDate);

app.get('/tweet', getRetrogradeTweetByDate)

app.listen(3000)