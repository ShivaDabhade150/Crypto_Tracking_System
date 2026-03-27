import {createUserRout} from "../api/createUserRout.js"

export const createUser = async (signInForm)=>{
    
      const res = await createUserRout(signInForm)
      const data = res.data
      console.log(data)
      return data

}