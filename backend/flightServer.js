const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3200
const app= express()
const flight = require('./routes/flight.routes')
app.use(bodyParser.json())
app.use(cors())
app.use('/flight', flight )


app.get('/', function(req, res){
    res.send('Hello from server')
})
 
app.listen(PORT, ()=>{
    console.log("Server running on localhost: "+ PORT);
})

