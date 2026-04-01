
import {NewRoute} from '../api/NewRoute.js'
export const NewService = async (rock)=>{

          const res = await NewRoute(rock)
          const data = res.data.articles
          return data
        
}


