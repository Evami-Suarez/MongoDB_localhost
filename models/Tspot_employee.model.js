const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TouristEmploySchema = new Schema({

employees: {

 fname: {
    type: String,
    required: true
  },

  mname: {
    type: String,
    required: true
  },

  lname: {
    type: String,
    required: true
  },  

  employee_number:{
    type: Number,
    required: true
  },

  birthday: {
    type: Date,
    required: true
  },

  address: {
    type: String,
    required: true
  }
}

});


const TouristSpotEmployee = mongoose.model('tspot_employees', TouristEmploySchema );
module.exports = TouristSpotEmployee;