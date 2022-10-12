const dates = require("../models/dates");

function getRetrogradeByDate(req,res,next) {
  // this is subtracting an hour
  const isoDate = new Date(req.query.date)
  console.log('1', isoDate)
  return dates.findOne({
    $and: [{
      'start_date' : {
        $lte: isoDate
      },
      'end_date' : {
        $gte: isoDate

      }
    }]
    // start_date: {
    //   $gte: isoDate
    // },
    // end_date: {
    //   $lte: isoDate
    // }
  }).lean().then((retrograde) => {
  console.log('2', retrograde)

    return Promise.all([retrograde])
  }).then((x) => {
  console.log('3', x)

    return res.send({x})
  })
 }

module.exports = getRetrogradeByDate