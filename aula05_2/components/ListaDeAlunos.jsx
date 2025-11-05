import React, { useEffect } from 'react';0
import { useState } from 'react';

const ListaDeAlunos = () => {

    const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/alunos");
      const data = await response.json();
      setAlunos(data);
    }
    fetchData();
  }, []);

  return (
    <div>
        <table>
            <thead>
                <th>Nome:</th>
                <th>Id:</th>
                <th>Curso:</th>
            </thead>
            <tbody>
                {alunos.map((aluno) => (
                    <tr key={aluno.id}>
                        <td>{aluno.nome}</td>
                        <td>{aluno.id}</td>
                        <td>{aluno.curso}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default ListaDeAlunos;
