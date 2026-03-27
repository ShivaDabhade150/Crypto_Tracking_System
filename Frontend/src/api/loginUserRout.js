import api from './axiosInstance.js'

export const loginUserRout =  (signInForm)=>{
     
     return  api.post('/user/userLogin',signInForm);
}