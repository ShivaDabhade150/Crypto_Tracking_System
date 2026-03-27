
require('dotenv').config()
const express = require('express')
const cors  = require('cors')
const app = express();

const userRouters = require('./router/userRouters.js')

// midleware 
app.use(express.json())
app.use(cors())




app.use('/user',userRouters)

app.use('/user',userRouters)



app.listen(process.env.PORT,()=>{

     console.log(`running on ${process.env.PORT}`)
})