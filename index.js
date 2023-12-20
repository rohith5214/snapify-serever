require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./Routes/router')
const snapServer = express()

snapServer.use(cors())
snapServer.use(express.json())
snapServer.use(router)
snapServer.use('/uploads',express.static('./uploads'))
const PORT = 4000 || process.env.PORT

snapServer.listen(PORT,()=>{
    console.log(`snapServer strted at port ${PORT} and waiting for client request`);
})

snapServer.get('/',(req,res)=>{
    res.send(`<h1>snapServer started and waiting for client request!!!</h1>`)
})
snapServer.post('/',(req,res)=>{
    res.send("post request")
})