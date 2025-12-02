import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#002F6C' }} className="text-white py-4 mt-5">
      <Container>

        {/* Linha principal */}
        <Row className="text-center text-md-start">

          {/* Logo */}
          <Col md={4} className="mb-4 mb-md-0 d-flex flex-column align-items-center align-items-md-start">
            <img 
              src="/uniesp.jpg" 
              width={70} 
              height={70} 
              alt="Uniesp Logo" 
              className="rounded mb-2"
            />
            <p className="small mb-0">
              © {new Date().getFullYear()} UNIESP – Todos os direitos reservados.
            </p>
          </Col>

          {/* Navegação */}
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="fw-bold">Navegação</h5>
            <ul className="list-unstyled mt-2">
              <li><Link to="/a-faculdade" className="text-white text-decoration-none">A Faculdade</Link></li>
              <li><Link to="/dpo-lgpd" className="text-white text-decoration-none">DPO LGPD</Link></li>
              <li><Link to="/noticias" className="text-white text-decoration-none">Notícias</Link></li>
              <li><Link to="/admin-noticias" className="text-white text-decoration-none">Admin</Link></li>
            </ul>
          </Col>

          {/* Contato */}
          <Col md={4}>
            <h5 className="fw-bold">Contato</h5>
            <ul className="list-unstyled mt-2">
              <li>Email: contato@uniesp.edu.br</li>
              <li>Telefone: (83) 1234-5678</li>
              <li>Endereço: Cabedelo- Pb</li>
            </ul>
          </Col>

        </Row>

      </Container>
    </footer>
  )
}

export default Footer
