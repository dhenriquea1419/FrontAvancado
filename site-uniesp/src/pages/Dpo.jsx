import React from "react";
import { Container, Card } from "react-bootstrap";

const Dpo = () => {
  return (
    <Container className="py-4">
      <h2 className="mb-4">DPO e LGPD</h2>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h4 className="mb-3">O que é o DPO?</h4>
          <p>
            O DPO (Data Protection Officer), ou Encarregado de Proteção de Dados,
            é o responsável por garantir que a instituição atue em conformidade com
            a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
          </p>
          <p>
            Ele funciona como um canal de comunicação entre os usuários, a empresa
            e a Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </Card.Body>
      </Card>

      <Card className="shadow-sm mb-4">
        <Card.Body>
          <h4 className="mb-3">Principais Funções do DPO</h4>
          <ul>
            <li>Orientar a instituição sobre práticas de proteção de dados;</li>
            <li>Monitorar o uso, armazenamento e tratamento de dados pessoais;</li>
            <li>Atender solicitações de titulares de dados;</li>
            <li>Atuar como ponte com a ANPD;</li>
            <li>Garantir que os direitos dos usuários sejam respeitados.</li>
          </ul>
        </Card.Body>
      </Card>

      <Card className="shadow-sm">
        <Card.Body>
          <h4 className="mb-3">Contato do Encarregado de Dados</h4>
          <p>
            Para dúvidas, sugestões ou solicitações relacionadas ao uso dos seus dados,
            entre em contato com o DPO:
          </p>

          <p className="mb-1"><strong>E-mail:</strong> dpo@uniesp.edu.br</p>
          <p className="mb-1"><strong>Telefone:</strong> (83) 0123-4567</p>
          <p><strong>Responsável:</strong> Marcelo Fernandes</p>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dpo;
