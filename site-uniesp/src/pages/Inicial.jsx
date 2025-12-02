import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import BannerAd from '../components/BannerAd'

const Inicial = () => {
  return (
    <Container className="py-4">
        <BannerAd/>
        
        <Card className="mb-4 shadow-sm">
            <p>
            A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
            </p>
            <p>
            Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
            </p>
            <p>
            A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
            </p>
        </Card>
        <Row className="g-4">
            <Col md={4}>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img 
                        variant="top"  
                        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                        alt="Main Building"
                        style={{ height:'200px', objectFit:'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Vida no Campus  
                        </Card.Title> 

                        <Card.Text>
                            Um ambiente vibrante e acolhedor, com diversas atividades extracurriculares, clubes estudantis e eventos culturais que enriquecem a experiência universitária.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img 
                        variant="top"  
                        src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                        alt="Main Building"
                        style={{ height:'200px', objectFit:'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Biblioteca 
                        </Card.Title> 

                        <Card.Text>
                            Uma biblioteca moderna e bem equipada, com um vasto acervo de livros, periódicos e recursos digitais para apoiar o aprendizado e a pesquisa dos alunos.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card className="text-center h-100 shadow-sm">
                    <Card.Img 
                        variant="top"  
                        src="https://images.unsplash.com/photo-1652974731232-efc86a9bd985"
                        alt="Main Building"
                        style={{ height:'200px', objectFit:'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Prédio Principal
                        </Card.Title> 

                        <Card.Text>
                            Um edifício moderno e bem equipado, projetado para proporcionar um ambiente de aprendizado confortável e inspirador para nossos alunos.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className="g-4 mt-4">
           <Col md={6}>
                <Card className=" h-100 shadow-sm">
                    <Card.Img 
                        variant="top"  
                        src="https://images.unsplash.com/photo-1521790797524-b2497295b8a0"
                        style={{ height:'200px', objectFit:'cover'}}
                    />
                    <Card.Body className="text-center">
                        <Card.Title>
                            Parceria com Empresas
                        </Card.Title> 
                        <Card.Text>
                            A Faculdade UNIESP mantém parcerias estratégicas com diversas empresas e organizações, proporcionando aos alunos oportunidades de estágio, networking e desenvolvimento profissional.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

            <Col md={6}>
                <Card className=" h-100 shadow-sm">
                    <Card.Img 
                        variant="top"  
                        src="https://images.unsplash.com/photo-1513258496099-48168024aec0"
                        style={{ height:'200px', objectFit:'cover'}}
                    />
                    <Card.Body className="text-center">
                        <Card.Title>
                            Compromisso com a Educação
                        </Card.Title> 
                        <Card.Text>
                            A Faculdade UNIESP está comprometida em oferecer uma educação de excelência, preparando os alunos para enfrentar os desafios do mercado de trabalho e contribuir positivamente para a sociedade.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    </Container>
  )
}

export default Inicial
