
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {SearchPage} from './Pages/SearchPage.jsx'
import {LandingPage} from './Pages/LandingPage.jsx'
import {CoinList} from "./component/CoinList.jsx"
import {Register} from "./Pages/Register.jsx"
import {Login} from "./Pages/Login.jsx" 
import { Routes, Route} from 'react-router-dom'
import {Home} from "./Pages/Home.jsx"
import {Footer} from "./component/Footer.jsx"
import {MarketViewPage} from "./Pages/MarketViewPage.jsx"
import {NewPage} from './Pages/NewPage.jsx' 
import {AboutUsPage} from './Pages/AboutUsPage.jsx'
function App() {

  return (
    <>
      <Routes>

        <Route  path="/" element={<LandingPage />} />
        <Route path="/user"  element={ <CoinList /> } />
        <Route path="/register" element={ <Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/market" element={<MarketViewPage />}/>
        <Route path="/new" element={<NewPage />}/>  
        <Route path="/about" element={<AboutUsPage />}/>
      </Routes>

       <ToastContainer />
    </>
  )
}

export default App
