const express = require('express')
const router = express.Router()
const contactController = require('../controller/contactController.js')

//contact 
router.post('/putContact',contactController.setcontactController)

module.exports = router