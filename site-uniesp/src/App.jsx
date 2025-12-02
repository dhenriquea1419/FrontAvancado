import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CustomNavbar from './components/CustomNavBar'
import Inicial from './pages/Inicial'
import Faculdade from './pages/Faculdade'
import Dpo from './pages/Dpo'
import Noticias from './pages/Noticias' 
import VisualizaNoticia from './pages/VisualizaNoticia'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
    <CustomNavbar />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<Inicial/>} />
          <Route path="/a-faculdade" element={<Faculdade/>} />
          <Route path="/dpo-lgpd" element={<Dpo/>} />
          <Route path="/noticias" element={<Noticias/>} />
          <Route path="/visualiza-noticia" element={<VisualizaNoticia/>} />
        </Routes>
      </Container>
       <Footer />
    </BrowserRouter>
  )
}

export default App
