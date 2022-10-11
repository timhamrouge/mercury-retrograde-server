const express = require('express')
const app = express()

const getRetrogradeByDate = require("./controllers/retrogradeController")

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello Timbo')
})

app.get('/retrograde', getRetrogradeByDate)

app.listen(3000)