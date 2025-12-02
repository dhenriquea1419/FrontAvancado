 import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
 
 const Faculdade = () => {
   return (
     <Container className="py-4">
        <h2 className="mb-4"> A Faculdade</h2>
        <Card className="mb-4 shadow-sm">
            <Card.Body>
                <p> 
                   A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal dos seus alunos. 
                </p>
                <p>
                    Loren, ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                   
            </Card.Body>
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

     </Container>
   )
 }
 
 export default Faculdade
 