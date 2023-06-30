import axios from "axios";
import { useEffect, useState } from "react";

function ListarDespesas() {
  const [despesas, setDespesas] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3333/listar")
    .then((resposta) => {
      setDespesas(resposta.data.dados);
    })
    .catch((erro) => {
      console.log(erro);
    });
  }, []);

  return (
    <div>
      <h1>Listagem de produtos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição da Despesa</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {despesas.map((despesa: any) => (
            <tr>
              <td>{despesa.id}</td>
              <td>{despesa.descricao}</td>
              <td> R${despesa.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarDespesas;
