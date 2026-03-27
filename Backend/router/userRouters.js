const express = require('express')
const router = express.Router()
const userController = require('../controller/userController.js')


router.post('/createUser',userController.createUser)

router.post("/userLogin",userController.getUser)



module.exports = router
