const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const PORT = 3000;
const url = 'mongodb://127.0.0.1:27017/TouristSpot'

async function connect() {
    try{
       await mongoose.connect(url)
        console.log('Database connected')
    }catch(error){
        console.log(`Error-> ${error}`)
    }
}
connect()

const Tspot_details_route = require('./routes/Tspot_details.route')
const Tspot_employee_route = require('./routes/Tspot_employee.route')
const Tspot_reservation_route = require('./routes/Tspot_reservation.route')
app.use('/Tspot_details',  Tspot_details_route )
app.use('/Tspot_employees',  Tspot_employee_route )
app.use('/Tspot_reservations',  Tspot_reservation_route )


app.listen(PORT, () => {console.log(`running on port ${PORT}`)
})