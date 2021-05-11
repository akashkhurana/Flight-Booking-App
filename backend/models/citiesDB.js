const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let cities = new Schema({
    city:{
      type: String
    }
  }, {
    collection: 'cities'
  })
  
  module.exports = mongoose.model('cities', cities)