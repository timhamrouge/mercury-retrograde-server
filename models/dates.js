const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateSchema = new Schema({
  start_date: {
    type: Date,
    required: true
  },
  end_date: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("dates", DateSchema);