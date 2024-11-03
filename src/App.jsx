import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Watchlist from './pages/Watchlist'
import Landing from './pages/Landing'
import Watchhistory from './pages/Watchhistory'
import { useState } from 'react'

function App() {
const [allHistory,setAllHistory] = useState(null)

  return (
    <>
   
      <Header/>
      {/* <h1 className="text-3xl font-bold underline ">
        Hello world!
      </h1> */}

      <Routes>
        <Route path = '/' element={<Landing/>}/>
        <Route path='/watchlist' element={<Watchlist setAllHistory={setAllHistory}/>}/>
        <Route path='/watchhistory' element={<Watchhistory allHistory={allHistory} setAllHistory={setAllHistory}/>}/>
      </Routes>
 
    </>
  )
}

export default App
