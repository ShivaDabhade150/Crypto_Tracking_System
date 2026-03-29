import {searchPageRoute} from "../api/searchPageRoute"

const searchService = async (searchData)=>{

    console.log(searchData," service")
            const res = await searchPageRoute(searchData)
            return res.data 
}

export default searchService