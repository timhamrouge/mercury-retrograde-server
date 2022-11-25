const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('dotenv').config()

const { getBooleanValueForDate, getRetrogradeDatesByDate, getRetrogradeTweetByDate } = require('./controllers/retrogradeController')

app.use(express.json())

mongoose.connect(process.env.DB_URL).then(() => {
  console.log(`connected to ${process.env.DB_URL}`)
})

app.get('/', function (req, res) {
  res.send('Hello Timbo')
})

app.get('/retrograde-dates', getRetrogradeDatesByDate)

app.get('/is-mercury-retrograde',
  getBooleanValueForDate
)

app.get('/tweet', getRetrogradeTweetByDate)

app.listen(3000)

module.exports = app
