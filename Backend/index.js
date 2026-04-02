
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express();

const userRouters = require('./router/userRouters.js')
const apiRouters = require('./router/apiRouters.js')
const contactRouters = require('./router/contactRoutes.js')

// midleware 
app.use(express.json())
app.use(cors())
app.use(express.text())   

app.use('/user', userRouters)

app.use('/list',apiRouters)

app.use('/api',apiRouters)

app.use('/api',apiRouters)

app.use('/api',apiRouters)

app.use('/contact', contactRouters)



app.listen(process.env.PORT, () => {

    console.log(`running on ${process.env.PORT}`)
})