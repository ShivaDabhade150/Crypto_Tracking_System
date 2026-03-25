import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import {useState} from "react"
export const Login = () => {

    const [sign,setSign] = useState("sign-up")


    const handleLogin = ()=>{
        setSign("sign-in")
    }

    const handleRegister =()=>{
        setSign("sign-up")
    }
    return (
        <>
            <div className="flex h-screen w-full items-center justify-center bg-[#F8FAFC] ">

                <div className={`${sign=="sign-up" ? "flex flex-col h-[70%]  w-96    items-center justify-center rounded-[3%]  shadow-xl/30 ": "flex flex-col h-[50%]  w-96    items-center justify-center rounded-[3%]  shadow-xl/30 "} `}>
                    <p className="font-bold text-[25px] hover:font-extrabold">Create New Account</p>
                    <div className="flex flex-col w-[95%] h-[60%] items-center justify-center gap-9 ">
                        {
                           sign=="sign-in" ?" "
                            :<div className="flex relative ">
                            <FaUser className="absolute left-3 top-3" />
                             <input type="text" placeholder=" User Name" className="border-black border-2 rounded-[5px] w-80 h-10  pl-10  hover:border-0 hover:shadow-xl hover:shadow-black-500" ></input>
                       
                         </div>
                        }
                         <div className="flex relative">
                           <FaEnvelope  className="absolute left-3 top-3"/>
                           <input type="email" placeholder="email " className="border-black border-2 rounded-[5px] w-80 h-10 pl-10 hover:border-0 hover:shadow-xl hover:shadow-black-500"></input>
                        
                         </div>
                         <div className="flex relative">
                            <FaLock className="absolute left-3 top-3" />
                            <input type="password" placeholder="Password" className="border-black border-2 rounded-[5px] w-80 h-10 pl-10 hover:border-0 hover:shadow-xl hover:shadow-black-500"></input>
                         </div>
                         
                         {sign=="sign-in" ?" "
                         :<div className="flex relative">
                            <FaLock className="absolute left-3 top-3" />
                            <input type="password" placeholder="confirm  Password" className="border-black border-2 rounded-[5px] w-80 h-10 pl-10 hover:border-0 hover:shadow-xl hover:shadow-black-500"></input>
                         </div>}
                      
                    </div>

                    <div className="flex w-[95%] h-[20%] ">
                        <div className="flex flex-col gap-3 w-full h-sceeen items-center  justify-center">
                            {sign=="sign-in"?<button className="w-80 h-10 text-white bg-black rounded-xl hover:font-bold hover:w-01 hover:h-11 transition duration-200" onClick={handleRegister}>Create Account</button>
                             : <button className="w-80 h-10 text-white bg-black rounded-xl hover:font-bold hover:w-01 hover:h-11 transition duration-200">register</button>
                            }
                            <button className="w-80 h-10 text-white bg-black rounded-xl hover:font-bold hover:w-01 hover:h-11 transition duration-200" onClick={()=>{
                                handleLogin()
                            }}>Login</button>
                        </div>

                    </div>
                </div>
           
            </div>
        </>
    )
}