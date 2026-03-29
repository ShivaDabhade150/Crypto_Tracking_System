
import {coinListRoute} from '../api/coinListRoute.js'
export const coinListService = async ()=>{

          const res = await coinListRoute()
          const data = res.data
          return data
}