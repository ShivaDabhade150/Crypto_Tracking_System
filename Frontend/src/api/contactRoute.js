import api from "./axiosInstance.js"

export const contactRoute = (reqData)=>{
       
       console.log(reqData)
       return  api.post('/contact/putContact',reqData)
}