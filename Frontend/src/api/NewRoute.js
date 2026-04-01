import api from './axiosInstance.js'

export const NewRoute = (rock)=>{

       console.log(rock,"route")
       return api.post('/api/news',rock)
}




 