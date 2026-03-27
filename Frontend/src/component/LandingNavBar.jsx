
import logo from '/logo.png'
export const LandingNavBar = ()=>{


       return(
        <>
        

            <nav className="flex w-full h-16 p-1 bg-[#0B1E2E]   text-white justify-between text-glow items-center hover:shadow-[0_0_15px_#3b82f6] transition-all duration-1000">
                <img src={logo} className="w-20 h-14 hover:w-21 hover:h-15 hover:drop-shadow-xl/50" />
                <ul className="flex gap-5 w-1/3  text-[20px]">
                    <li className="hover:font-bold hover:[text-shadow:0_0_10px_#38bdf8,0_0_20px_#38bdf8] transition-all duration-500">Home</li>
                    <li className="hover:font-bold hover:[text-shadow:0_0_10px_#38bdf8,0_0_20px_#38bdf8] transition-all duration-500">AboutUs</li>
                    <li className="hover:font-bold hover:[text-shadow:0_0_10px_#38bdf8,0_0_20px_#38bdf8] transition-all duration-500">Services</li>
                    <li className="hover:font-bold hover:[text-shadow:0_0_10px_#38bdf8,0_0_20px_#38bdf8] transition-all duration-500">LogIn</li>
                    <li className="hover:font-bold hover:[text-shadow:0_0_10px_#38bdf8,0_0_20px_#38bdf8] transition-all duration-500">SignUp</li>
                </ul>
            </nav>
        </>
       )
}