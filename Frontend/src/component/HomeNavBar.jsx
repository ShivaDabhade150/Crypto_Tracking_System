import { useState } from "react";
import logo from "/logo.png";
import { FaSearch } from "react-icons/fa";
import App from '../App.jsx'
import { Link , useNavigate} from 'react-router-dom'
export const HomeNavBar = () => {
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
      bg-black text-white  mt-1  border-1 border-white   ">

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
            
            <Link to='/home'>Home</Link>
          </li>
          
          <li className="hover:text-gray-600 transition cursor-pointer">
            <Link to="/market">Markets </Link>
          </li>


           <li className="hover:text-gray-600 transition cursor-pointer">
            
            <Link to="/about">About</Link>
                       
          </li>

          <li className="hover:text-gray-600 transition cursor-pointer">
            Services
          </li>

          <li className="hover:text-gray-600 transition cursor-pointer">
            Contact
            
          </li>
          <li className="hover:text-gray-600 transition cursor-pointer">
            
             <Link to="/new">News </Link>
          </li>
          
          <li onClick={handleSearch}  >
              <FaSearch  className="text-white text-xl cursor-pointer hover:text-gray-400 transition"/>
          </li>
          {/* Logout Button */}
          <li>
            <button  onClick={handleLogout} className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-gray-800 transition font-semibold">
              Log Out
            </button>
          </li>

        </ul>

        

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black flex flex-col items-center gap-4 py-4 border-t border-gray-300">

          <p className="hover:text-gray-600 cursor-pointer"><Link to='/home'>Home</Link></p>
          <p className="hover:text-gray-600 cursor-pointer"><Link to="/about">About</Link></p>
          <p className="hover:text-gray-600 cursor-pointer"><Link to="/market">Markets </Link></p>
          
          <p className="hover:text-gray-600 cursor-pointer"><Link to="/search">Search </Link></p>
          <p className="hover:text-gray-600 cursor-pointer"><Link to="/new">News </Link></p>
          <p className="hover:text-gray-600 cursor-pointer">Contact</p>

          <button onClick={handleLogout} className="bg-black text-white px-4 py-1 rounded-lg" >
            Log Out
          </button>
        </div>
      )}
    </>
  );
};