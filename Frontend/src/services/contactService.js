import {contactRoute} from "../api/contactRoute.js"

export const contactService = async (reqData)=>{

       console.log(reqData,'service')
       const res = await contactRoute(reqData)
      const data = res.data
      console.log(data)
      return data
}

