const dates = require("../models/dates");

function getRetrogradeByDate(req,res,next) {
  const isoDate = new Date(req.query.date)
  console.log('1', isoDate)
  return dates.findOne({
    start_date: {
      $gt: isoDate
    },
    end_date: {
      $lt: isoDate
    }
  }).lean().then((retrograde) => {
  console.log('2', retrograde)

    return Promise.all([retrograde])
  }).then((x) => {
  console.log('3', x)

    return res.send({x})
  })
 }

module.exports = getRetrogradeByDate