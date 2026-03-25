
const express = require('express')
const cors  = require('cors')
const app = express();
const port = 5000


// midleware 

app.use(express.json())
app.use(cors())

app.get('/user',(req,res)=>{
    res.send({
        name:'shiva',
        age:22,
        div:'A'
    })
})
app.listen(port,()=>{

     console.log(`running on ${port}`)
})