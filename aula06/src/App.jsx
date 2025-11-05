import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Noticias from './pages/Noticias'
import Contato from './pages/Contato'
import DpoLgpd from './pages/DpoLgpd'
import Faculdade from './pages/Faculdade'
import Inicial from './pages/Inicial'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element= {<Inicial />}/>
        <Route path="/contato" element= {<Contato/>}/>
        <Route path="/dpo-lgpd" element= {<DpoLgpd />}/>
        <Route path="/a-Faculdade" element= {<Faculdade/>}/>
        <Route path="/noticias" element= {<Noticias />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
