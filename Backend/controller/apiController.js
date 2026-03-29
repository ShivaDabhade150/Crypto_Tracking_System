
 
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
                'x-cg-demo-api-key':`${process.env.COINGECKO_API_KEY}`
               
            }
        })
        console.log(data.data)
         res.send(data.data)
    } catch (err) {
        console.log(err.response?.data?.message)
        res.status(500).json({ error: "API Error" })
    }

    
}


// get Coin Info by search

const getCoinInfo = async (req,res)=>{
       
       console.log('request recieve')
       const data = req.body.search
       console.log(data)    
       try{
           const rawData = await axios.get('https://api.coingecko.com/api/v3/search',{
            params:{
                query:data
            }  ,
            headers:{
                'x-cg-demo-api-key':`${process.env.COINGECKO_API_KEY}`
               }
         })

          console.log(rawData.data)
          res.send(rawData.data)
       }catch(err)
       {
         console.log(err.response?.data?.message)
         res.send(err.response?.data?.message)
       }
}




module.exports = {getCoinList,getCoinInfo}