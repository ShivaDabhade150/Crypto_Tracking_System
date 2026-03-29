import api from "./axiosInstance.js"

export const coinListRoute = ()=>{

       return  api.get('list/getCoinList')
}