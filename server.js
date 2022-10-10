const express = require('express')
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello Timbo')
})

app.listen(3000)