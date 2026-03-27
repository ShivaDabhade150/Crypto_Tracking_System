import api from './axiosInstance.js'
export const createUserRout = (signInForm)=>{
     return  api.post('/user/createUser',signInForm)
}