
import { useState } from "react";
import logo from "/logo.png";
import { FaSearch } from "react-icons/fa";
import App from '../App.jsx'
import { Link , useNavigate} from 'react-router-dom'
export const LandingNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  const handleLogout = ()=>{

       navigate('/login')
  }

  const handleSearch = ()=>{

       navigate('/search')
  }
  return (
    <>
      <nav className="flex justify-between items-center px-6 h-20 
      bg-black text-white  mt-1     ">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2">

            <div className=" flex  bg-white items-center justify-center w-15 h-15 border-2 rounded-full">
            <img
          src={logo}
          className="w-10 h-10 rounded-full  object-contain cursor-pointer hover:scale-105 transition"
        />
         
        </div>
          <p className="font-extrabold font-h text-xl">Crypto Intelligence</p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg items-center">



          <li className="hover:text-gray-600 transition cursor-pointer">
            Log In
            
          </li>
          <li className="hover:text-gray-600 transition cursor-pointer">
            
             <Link to="/new">Sign Up </Link>
          </li>
          
          

        </ul>

        
      </nav>

    </>
  );
};