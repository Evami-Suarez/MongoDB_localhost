const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TouristDetailsSchema = new Schema({

  Name: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  phonenumber: {
    type: String,
    required: true
  },

  time: {
    open: {
        type: String,
        required:true
  },
    close:{
        type: String,
        required:true
    }
},

  dateCreated: {
    type: Date,
    default: Date.now
  }
});

const TouristSpotDetails = mongoose.model('Tspot_details', TouristDetailsSchema );
module.exports = TouristSpotDetails;