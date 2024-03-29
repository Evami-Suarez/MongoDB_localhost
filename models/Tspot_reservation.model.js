const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TouristReserveSchema = new Schema({


  date: {
    type: Date,
    required: true
  },
 

  occassion: {
    type: String,
    required: true
  },  

  NumberofGuest:{
    type: Number,
    required: true
  },
  time: {
    arrival: {
        type: String,
        required:true
  },
    departure:{
        type: String,
        required:true
    }},
    dateCreated: {
      type: Date,
      default: Date.now
    }





});


const TouristSpotReservation = mongoose.model('tspot_reservation', TouristReserveSchema );
module.exports = TouristSpotReservation;