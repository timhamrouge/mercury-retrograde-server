const dates = require("../models/dates");
// make a reusable method
// pass in date as YYYY-mm-DD

async function getRetrogradeInfoForDate(date) {
  const result =  await dates.findOne({
    $and: [{
      'start_date' : {
        $lte: date
      },
      'end_date' : {
        $gte: date
      }
    }]
  })
  return result
}

async function getRetrogradeDatesByDate(req,res,next) {
  try {
    const result = await getRetrogradeInfoForDate(req.query.date)
    return res.send(result);
  } catch (err) {
    next(err);
  };
}

async function getBooleanValueForDate(req,res,next) {
  let result = true;
  try {
    const retrograde =  await dates.findOne({
      $and: [{
        'start_date' : {
          $lte: req.query.date
        },
        'end_date' : {
          $gte: req.query.date
        }
      }]
    })
    if (!retrograde) result = false;
    return res.send({isRetrograde: result})
  } catch (err) {
    next(err);
  };
}

  // return dates.findOne({
  //   $and: [{
  //     'start_date' : {
  //       $lte: req.query.date
  //     },
  //     'end_date' : {
  //       $gte: req.query.date
  //     }
  //   }]
  // }).lean().then((retrograde) => {

  //   return Promise.all([retrograde])
  // }).then((retrograde) => {
  //   let result = true;
  //   if (retrograde.includes(null)) result = false;
  //   return res.send({isRetrogrde: result})
  // }).catch(err => {
  //   next(err);
  // })


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
 
module.exports = { getRetrogradeDatesByDate, getRetrogradeTweetByDate, getBooleanValueForDate }