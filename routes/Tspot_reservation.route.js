const express = require('express')
const router = express.Router()
const Tspot_reservation_schema = require('../models/Tspot_reservation.model')

router.get('/', async (req,res)=>{
    try{
        const result = await Tspot_reservation_schema.find()
        res.send(result)
    }catch(e){
        res.send(e.message)
    }
})

router.get('/:id', async (req, res)=>{
    const id = req.params.id
    try{
        const result = await Tspot_reservation_schema.findById(id)
        res.send(result)
    }catch(e) {
        res.send(e.message)
    }
})

router.post('/', async (req, res) => {
    try{
        const tspot_reservation = new Tspot_reservation_schema(req.body)
        const result = await tspot_reservation.save()
        res.send(result)
    }catch(e){
        res.send(e.message)
    }
})

router.patch('/:id', async (req, res) => {
    const id = req.params.id
    const update = req.body
    try{
        const result = await Tspot_reservation_schema.findByIdAndUpdate(id, update)
        res.send(result)
    }catch(e){
        res.send(e.message)
    }
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try{
        const result = await Tspot_reservation_schema.findByIdAndDelete(id)
        res.send(result)
    }catch(e){
        res.send(e.message)
    }
})

module.exports = router