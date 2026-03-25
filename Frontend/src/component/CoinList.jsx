import {fetchUser} from "../services/fetchUser.js"
import {useEffect,useState} from "react"


export const CoinList = ()=>{
    const [data,setData] = useState(null)
    useEffect(()=>{
        const loadData = async ()=>{
            const data = await fetchUser()
            setData(data);
            console.log(data);
            console.log("rock")
        }
        loadData()
    },[])


      if (!data) 
        {
    
        return <h1>Loading...</h1>;
       }


     return(
        <>
           <h1>{data.name}</h1>
          <h1>{data.age}</h1> 
     </>
     ) 
     
}