import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import {useState,useRef} from "react"
import {useNavigate} from 'react-router-dom'
import {createUser} from '../services/createUser.js'
import {toast} from "react-toastify"
// import {loginUser} from "./services/loginUser.js"

export const Register = () => {
      
    
    const navigate = useNavigate()
    const emailRef = useRef()
    const userNameRef = useRef()
    const passReff = useRef()
    const confurmRef = useRef()
    const [signInForm,setSignInForm] = useState({

        userName:"",
        email:"",
        password:"",
        confurmPass:""
    })
     


    const handleLoginChanges = (e)=>{
       

        setSignInForm({
            
            ...signInForm,
            [e.target.name] :e.target.value
        }
        )
    }


    const handleRegisterForm =async ()=>{
         

        
         if(!signInForm.userName)
         {
            toast.warning("Username Required !")
             userNameRef.current.focus();
             return 
         }
         if(!signInForm.email)
         {
            toast.warning("Email Required !")
             emailRef.current.focus();
             return 
         }
         if(!signInForm.password)
         {
            toast.warning("Password Required !")
             passReff.current.focus();
             return 
         }
         if(!signInForm.confurmPass)
         {
            toast.warning("conform Required !")
             confurmRef.current.focus();
             return 
         }


         if(signInForm.password != signInForm.confurmPass)
         {
            toast.warning("Passwords do not match  !")
            return 
         }
        try{
            const resdata = await createUser(signInForm)
            console.log("success",resdata)
            toast.success("Account Created SuccessFully !")
            navigate('/login')
        }catch(err)
        {    
             toast.error("error! Please try again ! ")
             console.log("error",err)
        }
    }


    const handleLoginForm =   ()=>{
       
        navigate('/login');
    }

    return (
        <>
            <div className="flex h-screen w-full items-center justify-center bg-[#F8FAFC] ">
               
                <div className="flex flex-col h-[70%]  w-96    items-center justify-center rounded-[3%]  shadow-xl/30 ">
                    <p className="font-bold text-[25px] hover:font-extrabold">Create New Account</p>
                    <div className="flex flex-col w-[95%] h-[60%] items-center justify-center gap-9 ">
                        <div className="flex relative ">
                            <FaUser className="absolute left-3 top-3" />
                             <input  type="text" ref={userNameRef} placeholder=" User Name" name="userName"  onChange={handleLoginChanges} className="border-black border-2 rounded-[5px] w-80 h-10  pl-10  hover:border-0 hover:shadow-xl hover:shadow-black-500 " ></input>
                       
                         </div>
                        
                         <div className="flex relative">
                           <FaEnvelope  className="absolute left-3 top-3"/>
                           <input type="email" ref={emailRef} placeholder="email " name="email" onChange={handleLoginChanges} className="border-black border-2 rounded-[5px] w-80 h-10 pl-10 hover:border-0 hover:shadow-xl hover:shadow-black-500"></input>
                        
                         </div>
                         <div className="flex relative">
                            <FaLock className="absolute left-3 top-3" />
                            <input type="password" ref={passReff} placeholder="Password" name="password" onChange={handleLoginChanges} className="border-black border-2 rounded-[5px] w-80 h-10 pl-10 hover:border-0 hover:shadow-xl hover:shadow-black-500"></input>
                         </div>
                         
                         
                         <div className="flex relative">
                            <FaLock className="absolute left-3 top-3" />
                            <input   type="password" ref={confurmRef} onChange={handleLoginChanges} name="confurmPass" placeholder="confirmPassword"  className="border-black border-2 rounded-[5px] w-80 h-10 pl-10 hover:border-0 hover:shadow-xl hover:shadow-black-500"></input>
                         </div>
                      
                    </div>

                    <div className="flex w-[95%] h-[20%] ">
                        <div className="flex flex-col gap-3 w-full h-sceeen items-center  justify-center">
                        <button onClick={handleRegisterForm} className="w-80 h-10 text-white bg-black rounded-xl hover:font-bold hover:w-01 hover:h-11 transition duration-200">Register</button>
                            
                        <button  onClick={handleLoginForm}   className="w-80 h-10 text-white bg-black rounded-xl hover:font-bold hover:w-01 hover:h-11 transition duration-200" >Login</button>
                        </div>

                    </div>
                </div>
           
            </div>
        </>
    )
}