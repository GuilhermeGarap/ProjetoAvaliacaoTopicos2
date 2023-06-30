import axios from "axios";
import { useState } from "react";
import { Despesa } from "../../models/despesa.model";

function CadastroDespesa() {
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");

  function enviar() {
    //Enviar o produto para a API, através FETCH ou AXIOS
    let despesa: Despesa = new Despesa();
    despesa.descricao = descricao;
    despesa.preco = Number.parseInt(preco);

    axios
      .post("http://localhost:3333/cadastrar", despesa)
      .then((resposta) => {
        //Executar algo quando a requisição for bem sucedida
        //Códigos HTTP na faixa do 200
        //Redirecionar para o componente da listagem
        console.log(resposta.data.mensagem);
        setDescricao("");
        setPreco("");
      })
      .catch((erro) => {
        //Executar algo quando a requisição for mal sucedida
        //Códigos HTTP na faixa do 400 e 500
        console.log(erro);
      });
  }

  return (
    <div>
      <h1>Cadastrar Despesa</h1>
      <div>
        <label>Descrição da Despesa: </label>
        <input
          type="text"
          onChange={(event: any) => setDescricao(event.target.value)}
        />
      </div>
      <div>
        <label>Preço: </label>
        <input
          type="text"
          onChange={(event: any) => setPreco(event.target.value)}
        />
      </div>
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroDespesa;
