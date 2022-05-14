import Home from './pages/Home'
import Articles from './pages/Articles'
import Contacts from './pages/Contacts'
import Info from './pages/Info'
import { Stack, Row, Col, Container, Button } from 'react-bootstrap'
import './styles/App.css'
import LogoIcon from './assets/img/logo.svg'
import { Routes, Route, BrowserRouter, Link, useNavigate, useLocation } from 'react-router-dom'
import Article from './pages/Article'
import { useState, useEffect } from "react"


const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container className="px-4 px-md-5">
      <Row>
     <Stack className="justify-content-center pt-4">
        <Col xs={12} md={6} lg={4} className="text-center mx-auto">
          <img src={LogoIcon} height={130} width={130}></img>
        </Col>
        <Col xs={12} md={6} lg={4} className="text-center mx-auto mt-2">
          <h4>William Sebastiani</h4>
        </Col>
      </Stack>
      </Row>
      <Row className="justify-content-center mt-4 navbar py-0 mx-1">
        <Col onClick={() => navigate("/")} xs={6} md={2} className={`${location.pathname === "/" ? "active " : ""}menu-col text-center px-0 py-1`}>
          <p className="menu-item mb-0">Home</p>
        </Col>
        <Col onClick={() => navigate("/articoli")} xs={6} md={2} className={`${location.pathname.includes("articol") ? "active " : ""}menu-col text-center px-0 py-1`}>
        <p className="menu-item mb-0">Articoli</p>
        </Col>
        <Col onClick={() => navigate("/informazioni")} xs={6} md={2} className={`${location.pathname === "/informazioni" ? "active " : ""}menu-col text-center px-0 py-1`}>
        <p className="menu-item mb-0">Chi sono</p>
        </Col>
        <Col onClick={() => navigate("/contatti")} href="/contatti" xs={6} md={2} className={`${location.pathname === "/contatti" ? "active " : ""}menu-col text-center px-0 py-1`}>
        <p className="menu-item mb-0">Contatti</p>
        </Col>
      </Row>
      <main className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articoli" element={<Articles />} />
        <Route path="/articolo/:dir/:titolo" element={<Article />} />
        <Route path="/informazioni" element={<Info />} />
        <Route path="/contatti" element={<Contacts />} />

      </Routes>
      </main>
    </Container>
  )
}

export default App
