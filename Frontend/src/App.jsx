
import './App.css'
import {LandingPage} from './LandingPage.jsx'
import {CoinList} from "./component/CoinList.jsx"
import {Login} from "./Login.jsx" 
import { Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route  path="/" element={<LandingPage />} />
        <Route path="/user"  element={ <CoinList /> } />
        <Route path="/login" element={ <Login />} />
      </Routes>
    </>
  )
}

export default App
