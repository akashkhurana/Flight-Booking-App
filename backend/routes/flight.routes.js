const express = require('express')
const router = express.Router()
const mongoose = require('mongoose');
const Flight = require('../models/flightDB');
const cities = require('../models/citiesDB');
mongoDb = require('../database/flightdb');

mongoose.connect(mongoDb.db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).then(() => {
      console.log('Database sucessfully connected ')
    },
    error => {
      console.log('Database error: ' + error)
    }
  )  

  

router.get('/', (req, res)=>{
    res.send('From flight route')
})

router.post('/add', (req, res)=>{
  let flightData = req.body
  let flight = new Flight(flightData)
  flight.save((error, newFlight)=>{
      if(error){
          console.log(error);
      }
      else{
          res.status(200).send(newFlight)
      }
  })
})

router.get('/all', (req, res)=>{
  Flight.find((error, data)=>{
    if(error){
        console.log(error);
    }
    else{
        res.json(data)
    }
})
})

router.get('/search', (req, res)=>{
  const fldate = new Date(req.query.date)
  Flight.find({from: req.query.from, to: req.query.to, date: fldate},(error, data)=>{
    if(error){
        console.log(error);
    }
    else{
        res.json(data)
    }})
    
})

router.get('/search/:id', (req, res)=>{
  Flight.findById(req.params.id,(error, data)=>{
    if(error){
        console.log(error);
    }
    else{
        res.json(data)
    }})
    
})


router.get('/cities', (req, res)=>{
  cities.find((error, data)=>{
    if(error){
        console.log(error);
    }
    else{
        res.json(data)
    }
})
})

router.delete('/delete/:id', (req, res) => {
  Flight.findByIdAndRemove(req.params.id, (error, data) => {
  if (error) {
    res.json(error);
  } else {
    res.json(data);
  }
})
})

module.exports = router