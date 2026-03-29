import api from './axiosInstance.js'

 export const searchPageRoute = (searchData)=>{
        
    console.log(searchData,"route")
       return api.post('/api/searchCoin',searchData)
}