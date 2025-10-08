import React, { useState } from "react"; //importa o react e o hook(serve para criar e manipular estados de um componente funcional)

const HookMegaSena = () => {//cria um componente chamado mega sena
  const [numeroSorteado, setNumeroSorteado] = useState(null);
  const [numerosSorteados, setNumerosSorteados] = useState([]);
  // numeroSorteado: guarda o último número sorteado (inicia com null).
//numerosSorteados: guarda todos os números já sorteados (inicia como lista vazia []

  const sortearNumero = () => { 
    if (numerosSorteados.length >= 6) {
      alert("Já temos 6 números sorteados!");
      return; //se houver 6 numeros sorteados, exibe um alert e sai a função
    }

    let novoNumero;
    do {
      novoNumero = Math.floor(Math.random() * 60) + 1; //Usa Math.random() para gerar um número aleatório entre 1 e 60.
    } while (numerosSorteados.includes(novoNumero)); //garante que não haja números repetidos, verificando com includes().

    setNumeroSorteado(novoNumero);//atualiza o número atual mostrado.
    setNumerosSorteados([...numerosSorteados, novoNumero]); //→ adiciona o novo número à lista de sorteados.
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Jogo da Mega Sena</h2> 
      <p><strong>Número sorteado:</strong> {numeroSorteado ?? "-"}</p>
      <p><strong>Números já sorteados:</strong> {numerosSorteados.join(", ")}</p>
      <button onClick={sortearNumero}>Sortear Número</button>
    </div>
    //Um título: "Jogo da Mega Sena".
//O último número sorteado (ou "-" se ainda não tiver nenhum).
//A lista dos números já sorteados, separados por vírgulas.
//Um botão que, ao ser clicado, chama sortearNumero.
  );
};

export default HookMegaSena;
