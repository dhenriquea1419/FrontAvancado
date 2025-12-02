import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';

const VisualizaNoticia = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <Container className="py-4">
        <h3>Notícia não encontrada</h3>
        <Button variant="primary" onClick={() => navigate(-1)}>Voltar</Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <Card className="shadow-sm">
        <Card.Img
          variant="top"
          src={state.imagem}
          alt={state.titulo}
          style={{ height: '350px', objectFit: 'cover' }}
        />

        <Card.Body>
          <Card.Title>{state.titulo}</Card.Title>
          <Card.Text style={{ whiteSpace: "pre-line" }}>
            {state.completo}
          </Card.Text>

          <Button variant="primary" onClick={() => navigate(-1)}>
            Voltar
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default VisualizaNoticia;
