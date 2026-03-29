
import logo from '/logo.png'
import LandingPageVideo from "../assets/LandingPageVideo.mp4"
import {LandingNavBar} from "../component/LandingNavBar.jsx"

import {useNavigate} from "react-router-dom"
export function LandingPage() {
    
     const navigate = useNavigate()

        function handleGetStartButton()
        {
          navigate('/register')
        }
  

        function handleLoginButton()
        {
          navigate('/login')
        }
     
  return <>
        <div className="flex-col w-full items-center justify-center">
            
            <LandingNavBar />

            {/* Hero Section  */}
            <section className="flex flex-col gap-10 justify-center items-center relative h-screen overflow-hidden ">

                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover bg-black/20 "
                >
                    <source src={LandingPageVideo} type="video/mp4" />
                </video>

                {/* Overlay */}
                {/* <div className="absolute top-0 left-0 w-full h-full "></div> */}
                <p className="relative font-extrabold text-[50px] text-white [text-shadow:0_0_10px_#3b82f6] top-0 ">Empowering you with real-time crypto intelligence.</p>
                <p className="relative text-[20px] text-white   [text-shadow:0_0_10px_#3b82f6] top-0 ">Monitor live market trends, analyze price movements, and make smarter investment decisions with accurate crypto data.</p>
            
                
                <div className="flex gap-10">

                 <button className=" relative font-bold text-[20px] w-45 h-11 text-white  bg-[#0B1E2E] top-0  rounded-[10px]  hover:w-46 hover:h-12 hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300" onClick={()=>{handleGetStartButton()}}>Get Start ⇨</button>
                 <button className=" relative font-bold text-[20px] w-45 h-11 text-white  bg-[#0B1E2E] top-0  rounded-[10px]  hover:w-46 hover:h-12 hover:shadow-[0_0_15px_#3b82f6] transition-all duration-300" onClick={()=>{handleLoginButton()}}>Log In ⇨</button>                
         
                </div>
                </section>

<footer className="bg-[#0B1E2E] text-white p-6">

  {/* Top Section */}
  <div className="flex justify-between items-start">

    {/* Logo */}
    <div>
      <img src={logo} className="w-20" />
      <p className="mt-2 text-sm">Track crypto smartly 🚀</p>
    </div>

    {/* Links */}
    <div>
      <p className="font-bold mb-2">Links</p>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Services</li>
      </ul>
    </div>

    {/* About */}
    <div>
      <p className="font-bold mb-2">About</p>
      <ul>
        <li>About</li>
        <li>Feedback</li>
      </ul>
    </div>

    {/* Social */}
    <div>
      <p className="font-bold mb-2">Social</p>
      <ul>
        <li>GitHub</li>
        <li>LinkedIn</li>
      </ul>
    </div>

  </div>

  {/* Bottom Section */}
  <div className="text-center mt-6 border-t border-gray-600 pt-4">
    <p className="text-sm">Stay consistent, success will follow 💯</p>
    <p className="text-xs mt-2">© 2026 CryptoTracker. All rights reserved</p>
  </div>

</footer>
        </div>
    </>
}