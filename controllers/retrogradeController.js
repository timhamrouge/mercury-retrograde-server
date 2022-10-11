const dates = require("../models/dates");

function getRetrogradeByDate(req,res,next) {
  dates.findOne({
    start_date: {
      $gt: ISODate(req.query.date)
    },
    end_date: {
      $lt: ISODate(req.query.date)
    }
  }).lean().then((retrograde) => {
    return Promise.all(retrograde)
  }).then((x) => {
    return res.send({x})
  })
 }

module.exports = getRetrogradeByDate