
import React from "react";
import axios from "axios";
import Botao from "../../ComponentesTipo/Botao";

function DeletarTarefa({ id, titulo, setListaTarefa, conteudo, completa }) {
  const filtro = (lista) => lista.id !== id;

  const deletarTarefa = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/deletar/tarefa/${id}`);
      setListaTarefa((prevList) => prevList.filter(filtro));
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const alternarCompletude = async () => {
    try {
        const response = await axios.put(`http://localhost:5000/completa/${id}`);
        if (response.status === 200) {
            setListaTarefa((prevList) => prevList.map((item) =>
                    item.id === id ? { ...item, completa: !completa } : item
                )
            );
        }
    } catch (error) {
        console.error(error);
    }
};


  return (
    <div>
        <h3 className={`classe1 classe2 classe3`} 
            style={{ 
                textDecoration: completa ? "line-through" : "none", 
                color: completa ? "green" : "white",
                fontStyle: completa ? "italic" : "normal"
            }}>
            {titulo}
        </h3>
      <p>{conteudo}</p>
      <div>
        <Botao 
            texto="Excluir" 
            aoClicar={deletarTarefa} />
        <Botao
            texto={completa ?  "Descompletar" : "Completar" }
            aoClicar={alternarCompletude}
        />
      </div>
    </div>
  );
}

export default DeletarTarefa;

  