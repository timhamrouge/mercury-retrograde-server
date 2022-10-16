const dates = require("../models/dates");
// make a reusable method
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
    let result = true;
    if (retrograde.includes(null)) result = false;
    return res.send({isRetrogrde: result})
  }).catch(err => {
    next(err);
  })
 }

 function getRetrogradeTweetByDate(req,res,next) {
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
    let result = "Mercury is in retrograde right now.";
    if (retrograde.includes(null)) result = "Mercury isn't in retrograde right now";
    return res.send({tweetBody: result})
  }).catch(err => {
    next(err);
  })
 }
 
module.exports = { getRetrogradeByDate, getRetrogradeTweetByDate}