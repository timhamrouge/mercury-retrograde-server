const dates = require("../models/dates");

function getRetrogradeByDate(req,res,next) {
  // pass in date as YYYY-mm-DD

  return dates.findOne({
    $and: [{
      'start_date' : {
        $lte: req.query.date
      },
      'end_date' : {
        $gte: req.query.date
      }
    }]
  }).lean().then((retrograde) => {

    return Promise.all([retrograde])
  }).then((retrograde) => {
    if (retrograde.includes(null)) console.log('null')
    else console.log('no')
    return res.send({retrograde})
  }).catch(err => {
    next(err);
  })
 }
 
module.exports = getRetrogradeByDate