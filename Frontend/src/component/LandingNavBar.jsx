
import logo from '/logo.png'
import {useState} from 'react'
export const LandingNavBar = ()=>{

    const [before,setBefore] = useState(false)

       return(
        <>
        

            <nav className="flex w-full h-16 p-1 bg-[#0B1E2E]   text-white justify-between text-glow items-center hover:shadow-[0_0_15px_#3b82f6] transition-all duration-1000">
                <img src={logo} className="w-29 h-14 hover:w-21 hover:h-15 hover:drop-shadow-xl/50 pl-4" />
                <ul className="flex gap-5 w-1/3  text-[20px] items-end pr-9 justify-end">
                    <li className="hover:font-bold hover:[text-shadow:0_0_10px_#38bdf8,0_0_20px_#38bdf8] transition-all duration-500">Log In</li>
                    <li className="hover:font-bold hover:[text-shadow:0_0_10px_#38bdf8,0_0_20px_#38bdf8] transition-all duration-500">Sign Up</li>
                </ul>
            </nav>
        </>
       )
}