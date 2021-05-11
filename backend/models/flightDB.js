const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let flightDetails = new Schema({
  airline:{
    type: String,
  },
  from: {
    type: String
  },
  to: {
    type: String
  },
  flightNo: {
    type: String,
    unique: true
  },
  fare: {
    type: Number
  },
  tickets:{
    type:Number
  },
  date: {
    type: Date
  }
}, {
  collection: 'flightDetails'
})

module.exports = mongoose.model('flightDetails', flightDetails)

