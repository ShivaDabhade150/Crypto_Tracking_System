import api from "./axiosInstance.js"
                   
export const marketViewPageRoute = (data)=>{
      console.log('route ')
      return api.post('/api/Market',data)
}