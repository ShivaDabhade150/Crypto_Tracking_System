import {getUser} from '../api/getUser.js'

export const fetchUser = async ()=>{

    const res = await getUser()
    return res.data
}