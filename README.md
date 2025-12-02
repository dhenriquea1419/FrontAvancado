Projeto React – Navegação, Estilização e Consumo de API

Este projeto foi desenvolvido utilizando React com JSX, navegação com React Router DOM, estilização com Bootstrap e consumo de API usando Axios.

🚀 Tecnologias utilizadas

React – criação da interface e componentes

JSX – estruturação dos componentes

React Router DOM – rotas e navegação entre páginas

Bootstrap – estilização rápida e responsiva

Axios – requisições HTTP para APIs

📦 Instalação e execução

Clone o projeto:

git clone https://github.com/seu-usuario/seu-projeto.git


Acesse a pasta:

cd seu-projeto


Instale as dependências:

npm install


Execute o projeto:

npm start

📁 Estrutura básica
src/
 ├── components/
 ├── pages/
 ├── routes/
 ├── App.jsx
 └── index.js

🌐 Rotas

As páginas do projeto são gerenciadas pelo React Router DOM, permitindo navegação SPA (Single Page Application).

🔌 Consumo de API

O projeto utiliza Axios para fazer requisições HTTP:

import axios from "axios";

axios.get("https://api.exemplo.com/dados")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

🎨 Estilo

O Bootstrap é importado diretamente no index.js ou no App.jsx:

import "bootstrap/dist/css/bootstrap.min.css";
