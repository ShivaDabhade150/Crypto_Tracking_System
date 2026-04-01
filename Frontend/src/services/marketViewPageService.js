
import {marketViewPageRoute} from '../api/marketViewPageRoute.js'

export const marketViewPageService = async (data)=>{
        console.log('market service')
       const rowData = await marketViewPageRoute(data)
       const responce = rowData.data
       return responce
}