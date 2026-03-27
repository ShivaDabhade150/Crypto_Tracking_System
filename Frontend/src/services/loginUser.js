
import {loginUserRout} from '../api/loginUserRout.js'
export const loginUser = async (signInForm)=>{
      
      const res = await loginUserRout(signInForm)
      
      return res.data
}