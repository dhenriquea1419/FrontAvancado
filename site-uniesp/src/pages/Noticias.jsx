import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';   // ✅ ALTERAÇÃO

const Noticias = () => {

  const navigate = useNavigate();   // ✅ ALTERAÇÃO

  return (
    <Container className="py-4">
      <h2 className="mb-4">Notícias</h2>

      <Card className="mb-4 shadow-sm">
        <Card.Body>
          Confira as últimas notícias e novidades da Faculdade UNIESP.
          Aqui você encontra atualizações sobre eventos, projetos acadêmicos,
          comunicados oficiais e conquistas da nossa comunidade acadêmica.
        </Card.Body>
      </Card>

      <Row className="g-4">

        {/* NOTÍCIA 1 */}
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Semana Acadêmica"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Semana Acadêmica 2025</Card.Title>
              <Card.Text>
                A Semana Acadêmica contou com palestras, workshops e apresentações
                de projetos, reunindo alunos, professores e profissionais renomados.
              </Card.Text>

              {/* ✅ ALTERAÇÃO — BOTÃO QUE ENVIA AS INFORMAÇÕES */}
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/visualiza-noticia", {
                    state: {
                      titulo: "Semana Acadêmica 2025",
                      imagem: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
                      completo: `
A Semana Acadêmica 2025 da UNIESP foi marcada por uma rica programação com palestras,
workshops, apresentações de projetos e rodas de conversa.

O evento reuniu alunos, professores, pesquisadores e profissionais do mercado,
proporcionando troca de conhecimento, inovação e integração da comunidade acadêmica.

A semana também contou com:
• Mostra de projetos científicos  
• Oficinas práticas  
• Participação de convidados renomados  
• Espaços de networking e carreira  

Um evento completo dedicado ao aprendizado e à formação profissional dos estudantes.
                      `
                    }
                  })
                }
              >
                Ler mais
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* NOTÍCIA 2 */}
        <Col md={6}>
          <Card className="shadow-sm h-100">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=60"
              alt="Nova Biblioteca Digital"
              style={{ height: "250px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>Nova Biblioteca Digital</Card.Title>
              <Card.Text>
                A UNIESP lançou uma plataforma digital com milhares de livros,
                artigos e materiais de estudo acessíveis 24h para todos os alunos.
              </Card.Text>

              {/* ✅ ALTERAÇÃO — BOTÃO QUE ENVIA AS INFORMAÇÕES */}
              <Button
                variant="primary"
                onClick={() =>
                  navigate("/visualiza-noticia", {
                    state: {
                      titulo: "Nova Biblioteca Digital",
                      imagem: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=60",
                      completo: `
A nova Biblioteca Digital UNIESP traz mais de 10.000 títulos entre livros,
artigos, revistas científicas, materiais de estudo e conteúdo multimídia.

A plataforma funciona 24 horas, permitindo que estudantes acessem o conteúdo
de qualquer dispositivo, com busca rápida e filtros avançados.

Destaques da nova plataforma:
• Catálogo atualizado semanalmente  
• Acesso remoto em tempo real  
• Suporte para leitura offline  
• Seções especiais para TCC, pesquisa e concursos  

Um grande avanço no apoio ao aprendizado e à formação acadêmica.
                      `
                    }
                  })
                }
              >
                Ler mais
              </Button>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Noticias;
