import axios from "axios";
import { useEffect, useState } from "react";

function VisualizarDespesas() {
  const [total, setTotal] = useState([]);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:3333/visualizar")
    .then((resposta) => {
      setTotal(resposta.data.Total);
      setMedia(resposta.data.Media);
    })
    .catch((erro) => {
      console.log(erro);
    });
  }, []);

  return (
    <div>
      <h1>Visualizar Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>Total</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>R${total}</td>
              <td>R${media}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VisualizarDespesas;
