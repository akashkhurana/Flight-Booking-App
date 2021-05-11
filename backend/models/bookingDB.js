const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  age: {
    type: Number,
  },
  gender: {
    type: String
  },
  flightNo: {
    type: String
  },
  hascheckedIn: {
    type: Boolean,
    default: false
  },
  checkinId: {
    type:Number
  }
}, {
  collection: 'booking'
}
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;