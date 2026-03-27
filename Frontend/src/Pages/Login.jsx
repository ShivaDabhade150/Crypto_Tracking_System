

import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import {useState} from "react"
import {useNavigate} from 'react-router-dom'
// import {createUser} from './services/createUser.js'
import {loginUser} from "../services/loginUser.js"
import { toast } from 'react-toastify';
export const Login = () => {
      
    
    const navigate = useNavigate()
    const [signInForm,setSignInForm] = useState({

       
        email:"",
        password:""
    })
     


    const handleLoginChanges = (e)=>{
       
        setSignInForm({
            
            ...signInForm,
            [e.target.name] :e.target.value
        }
        )
    }

    const handleRegisterForm = ()=>{
       
       navigate('/register')
    }

    const handleLoginForm = async ()=>{

          try{
            const data = await loginUser(signInForm)
            console.log(data);
            toast.success('Login Successfully !')
            navigate('/home')

          }catch(err)
          {
            toast.error(err.response?.data?.message || "Login failed")
            console.log(err.response?.data?.message || "Login failed")
            console.log(err.response?.data?.message || "Login failed")
            console.log(err.response?.data?.message || " Error found")
          }
    }

    return (
        <>
            <div className="flex h-screen w-full items-center justify-center bg-[#F8FAFC] ">
               
                <div className="flex flex-col h-[50%]  w-96    items-center justify-center rounded-[3%]  shadow-xl/30 ">
                    <p className="font-bold text-[25px] pt-2 hover:font-extrabold">Welcome back</p>
                    <div className="flex flex-col w-[95%] h-[40%] items-center justify-center gap-9 ">
                        
                         <div className="flex relative">
                           <FaEnvelope  className="absolute left-3 top-3"/>
                           <input type="email" placeholder="email " name="email" onChange={handleLoginChanges} className="border-black border-2 rounded-[5px] w-80 h-10 pl-10 hover:border-0 hover:shadow-xl hover:shadow-black-500"></input>
                        
                         </div>
                         <div className="flex relative">
                            <FaLock className="absolute left-3 top-3" />
                            <input type="password" placeholder="Password" name="password"onChange={handleLoginChanges} className="border-black border-2 rounded-[5px] w-80 h-10 pl-10 hover:border-0 hover:shadow-xl hover:shadow-black-500"></input>
                         </div>
                         
                         
                      
                    </div>

                    <div className="flex w-[95%] h-[20%] ">
                        <div className="flex flex-col gap-3 w-full h-sceeen items-center  justify-center">
                        <button onClick={handleRegisterForm}className="w-80 h-10 text-white bg-black rounded-xl hover:font-bold hover:w-01 hover:h-11 transition duration-200">Create New Account</button>
                            
                        <button  onClick={handleLoginForm}className="w-80 h-10 text-white bg-black rounded-xl hover:font-bold hover:w-01 hover:h-11 transition duration-200" >Login</button>
                        </div>

                    </div>
                </div>
           
            </div>
        </>
    )
}