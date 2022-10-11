const express = require('express')
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello Timbo')
})

app.get('/retrograde', function (req, res) {
  res.send(`i will check ${req.query.date}`)
})

app.listen(3000)