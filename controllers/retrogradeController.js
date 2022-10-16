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
    let result = false;
    if (retrograde.includes(null)) result = false;
    return res.send({isRetrogrde: result})
  }).catch(err => {
    next(err);
  })
 }
 
module.exports = getRetrogradeByDate