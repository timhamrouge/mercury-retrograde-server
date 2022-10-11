const dates = require("../models/dates");

function getRetrogradeByDate(req,res,next) {
  console.log('1')
  return dates.findOne({
    start_date: {
      $gt: ISODate(req.query.date)
    },
    end_date: {
      $lt: ISODate(req.query.date)
    }
  }).lean().then((retrograde) => {
  console.log('2')

    return Promise.all(retrograde)
  }).then((x) => {
  console.log('3')

    return res.send({x})
  })
 }

module.exports = getRetrogradeByDate