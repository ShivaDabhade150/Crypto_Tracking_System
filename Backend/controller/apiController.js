

const axios = require('axios')

//get Coin List 
const getCoinList = async (req, res) => {

    try {
        const data = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'inr',
                order: 'market_cap_desc',
                per_page: 50,
                page: 2

            },
            headers: {
                'x-cg-demo-api-key': `${process.env.COINGECKO_API_KEY}`

            }
        })

        res.send(data.data)
    } catch (err) {
        console.log(err.response?.data?.message)
        res.status(500).json({ error: "API Error" })
    }


}


// get Coin Info by search

const getCoinInfo = async (req, res) => {


    const data = req.body.search

    try {
        const rawData = await axios.get('https://api.coingecko.com/api/v3/search', {
            params: {
                query: data
            },
            headers: {
                'x-cg-demo-api-key': `${process.env.COINGECKO_API_KEY}`
            }
        })


        res.send(rawData.data)
    } catch (err) {
        console.log(err.response?.data?.message)
        res.send(err.response?.data?.message)
    }
}


// Market View 
const getMarketView = async (req, res) => {

    const data = req.body.id
    console.log(data, "getMarget")
    try {
        const responce = await axios.get(`https://api.coingecko.com/api/v3/coins/${data}/market_chart`, {

            params: {
                vs_currency: 'inr',
                days: 1,
            },
            headers: {
                "x-cg-demo-api-key": `${process.env.COINGECKO_API_KEY}`
            }
        })

        // console.log(responce)
        res.send(responce.data)
    } catch (err) {
        console.log(err.response?.data?.message)
    }

}


const getNew = async (req, res) => {

    const coin = req.body.id
    console.log(coin, "getMarget")
    try {
        const responce = await axios.get(`https://gnews.io/api/v4/search`, {
            params: {
                q: coin,
                token: process.env.GNEW_API_KEY,
                lang: "en",
                max: 10
            }
        });
        // console.log(responce.data)
        // console.log('after data')
        res.send(responce.data)
    } catch (err) {
        console.log(err.response?.data?.message)
    }
}



    module.exports = { getCoinList, getCoinInfo, getMarketView, getNew }