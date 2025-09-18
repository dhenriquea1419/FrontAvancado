import React from 'react'
import Aluno from "./components/Aluno";

const App = () => {
  return (
    <div>
      {
        [
          {Nome: "Notebook", Preco: "R$4.500", Quantidade:1},
          {Nome: "Mouse", Preco: "R$450,00",Quantidade:7 },
          {Nome: "Garrafa", Preco: "R$45,00", Quantidade:20 }
        ].map((Produto)=> 
          <Produto nome={produto.Nome} preço= {produto.Preço} produto= {produto.Quantidade} status= {produto.Status} />
         )
      }
    </div>
  )
}

export default App