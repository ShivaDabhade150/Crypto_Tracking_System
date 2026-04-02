const apiController = require('../controller/apiController.js')
const express = require('express')
const router = express.Router()


//get list route
router.get('/getCoinList',apiController.getCoinList)

router.post('/searchCoin',apiController.getCoinInfo)

console.log('data in api')

router.post('/Market',apiController.getMarketView)


router.post('/news',apiController.getNew)


module.exports = router