const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const mongoose = require('mongoose')
mongoDb = require('../database/logindb');
User = require('../models/user')

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
    res.send('From API route')
})

router.post('/register', (req, res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser)=>{
        if(error){
            console.log(error);
        }
        else{
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/login',(req, res)=>{
    let userData = req.body
    User.findOne({email: userData.email}, (error, user) =>{
        if (error){
            console.log(error);
        } else{
            if(!user){
                res.status(401).send('Invalid email')
            } else
            if(user.password !== userData.password){
                res.status(401).send('Invalid password')
            } else{
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
})

router.get('/all', (req, res)=>{
    User.find((error, data)=>{
      if(error){
          console.log(error);
      }
      else{
          res.json(data)
      }
  })
  })

module.exports = router