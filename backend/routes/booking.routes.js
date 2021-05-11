const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
let Booking = require('../models/bookingDB')
mongoDb = require('../database/bookingdb')

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
  res.send('From booking route')
})


// Add Booking
router.post('/add', (req, res)=>{
  let bookingData = req.body
  let booking = new Booking(bookingData)
  booking.save((error, newBooking)=>{
      if(error){
          console.log(error);
      }
      else{
          res.status(200).send(newBooking)
      }
  })
})

// Get all Bookings
router.get('/all', (req, res)=>{
  Booking.find((error, data)=>{
    if(error){
        console.log(error);
    }
    else{
        res.json(data)
    }
})
})

// Get Booking by id
router.get('/search/:id', (req, res)=>{
  Booking.findById(req.params.id,(error, data)=>{
    if(error){
        console.log(error);
    }
    else{
        res.json(data)
    }})
    
})



// // Update Book
// bookRoute.route('/update/:id').put((req, res, next) => {
//     Booking.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Book updated successfully!')
//     }
//   })
// })

// // Delete Booking
// bookRoute.route('/delete/:id').delete((req, res, next) => {
//     Booking.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

module.exports = router;