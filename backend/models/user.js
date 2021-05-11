const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String
  },
  password: {
    type: String
  },
  role:{
    type:String
  }
}, {
  collection: 'users'
}
);

module.exports = mongoose.model('User', userSchema);
