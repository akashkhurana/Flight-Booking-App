const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 3100
const app= express()
const api = require('./routes/login.routes')
app.use(bodyParser.json())
app.use(cors())
app.use('/api', api )

app.get('/', function(req, res){
    res.send('Hello from server')
})
 
app.listen(PORT, ()=>{
    console.log("Server running on localhost: "+ PORT);
})

