import React from 'react'

const Produto = () => {
  return (
    <div>
      <p>Nome:{nome}</p>
      <p>Preco:{preço}</p>
      <p>Categoria:{categoria}</p>
      <p>Quantidade:{quantidade}</p>
      <p>Status:{quantidade>= 0? 'Disponível': 'Esgotado'}</p>
    </div>
  )
}

export default Produto
