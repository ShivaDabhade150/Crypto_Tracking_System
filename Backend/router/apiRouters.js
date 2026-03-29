const apiController = require('../controller/apiController.js')
const express = require('express')
const router = express.Router()



//get list route
router.get('/getCoinList',apiController.getCoinList)

console.log('data in api')

router.post('/searchCoin',apiController.getCoinInfo)


module.exports = router