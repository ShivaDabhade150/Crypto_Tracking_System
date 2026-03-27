
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {LandingPage} from './Pages/LandingPage.jsx'
import {CoinList} from "./component/CoinList.jsx"
import {Register} from "./Pages/Register.jsx"
import {Login} from "./Pages/Login.jsx" 
import { Routes, Route} from 'react-router-dom'
import {Home} from "./Pages/Home.jsx"
function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<LandingPage />} />
        <Route path="/user"  element={ <CoinList /> } />
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />} />
      </Routes>

       <ToastContainer />
    </>
  )
}

export default App
