
import logo from '/logo.png'
import LandingPageVideo from "../assets/LandingPageVideo.mp4"
import {LandingNavBar} from "../component/LandingNavBar.jsx"
import {Footer} from "../component/Footer.jsx/"
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
        <div className="flex-col w-full h-screen items-center justify-center">
            
            <LandingNavBar />

            {/* Hero Section  */}
            <section className="relative h-[87%] flex flex-col items-center justify-center text-center overflow-hidden">

  {/* 🎥 Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute w-full h-full object-cover"
  >
    <source src={LandingPageVideo} type="video/mp4" />
  </video>

  {/* 🔥 Overlay */}
  <div className="absolute w-full h-full bg-black/70 backdrop-blur-sm"></div>

  {/* 🔥 Content */}
  <div className="relative z-10 max-w-4xl px-6">

    {/* TITLE */}
    <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
      Empowering You with
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        {" "}Crypto Intelligence
      </span>
    </h1>

    {/* SUBTITLE */}
    <p className="text-gray-300 text-lg mb-8">
      Track live market trends, analyze crypto charts, and stay updated with real-time news — all in one powerful platform.
    </p>

    {/* 🔘 BUTTONS */}
    <div className="flex justify-center gap-6 flex-wrap">

      <button
        onClick={handleGetStartButton}
        className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold hover:scale-105 transition ]"
      >
         Get Started
      </button>

      <button
        onClick={handleLoginButton}
        className="px-8 py-3 rounded-xl border border-gray-500 text-white hover:border-green-400 hover:text-green-400 transition"
      >
        Login
      </button>

    </div>

  </div>

</section>

<Footer />

        </div>
    </>
}