import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Watchlist from './pages/Watchlist'

import Watchhistory from './pages/Watchhistory'

import Footer from './components/Footer'

import Landing from './pages/Landing'

function App() {


  return (
    <>
   
      <Header/>
      {/* <h1 className="text-3xl font-bold underline ">
        Hello world!
      </h1> */}

      <Routes>
        <Route path = '/' element={<Landing/>}/>
        <Route path='/watchlist' element={<Watchlist/>}/>
        <Route path='/watchhistory' element={<Watchhistory/>} />
      </Routes>
      <Footer/>
 
    </>
  )
}

export default App
