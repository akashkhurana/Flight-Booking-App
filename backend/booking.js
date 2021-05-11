const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoDb = require('./database/db');

let Booking = require("./models/bookingDB");
let flightDetails = require("./models/flightDB")

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

app.get('/', (req,res)=>{
    res.send("This is the Book service");
})

app.post('/book', (req,res)=>{
    var newBook = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        gender: req.body.gender
    }
    var book = new Booking(newBook)
    book.save().then(()=>{
        console.log("New Book created")
    }).catch((err)=>{
        if(err){
            throw err;
        }
    })
});

app.get('/bookings', (req, res)=>{
    Booking.find().then((bookings)=>{
        res.json(bookings);
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

app.get('/booking/:id', (req, res)=>{
    Booking.findById(req.params.id).then((booking)=>{
        if(booking){
            res.json(booking)
        }
        else{
            res.sendStatus(404);
        }
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

app.delete("/booking/:id", (req,res)=>{
    Booking.findOneAndRemove(req.params.id).then(()=>{
        res.send("Booking removed with success")
    }).catch(err =>{
        if(err){
            throw err;
        }
    })
})

app.listen(3000, ()=>{
    console.log("Up and running this is the Book service");
})