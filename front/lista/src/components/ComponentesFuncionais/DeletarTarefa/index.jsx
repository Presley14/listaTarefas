
import React from "react";
import axios from "axios";
import Botao from "../../ComponentesTipo/Botao";
import { format } from "date-fns";
import styles from "./DeletarTarefa.module.css"


function DeletarTarefa({ id, titulo, setListaTarefa, conteudo, completa, ultimaAtualizacao }) {
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

const dataDoBanco = ultimaAtualizacao; // Supondo que 'ind' contenha a data do banco
const dataFormatada = format(new Date(dataDoBanco), "dd/MM/yyyy HH:mm:ss");


  return (
    <div>
      <div className={styles.caixa}>
        <div className={styles.titulo}>
            <h3 className={`classe1 classe2 classe3`} 
                style={{ 
                    textDecoration: completa ? "line-through" : "none", 
                    color: completa ? "black" : "white",
                    fontStyle: completa ? "italic" : "normal"
                }}>
                {titulo}
            </h3>
        </div>
        <div>
          <div className={styles.caixaBtn}>
              <Botao 
                  texto="Excluir" 
                  aoClicar={deletarTarefa} />
              <Botao
                  texto={completa ?  "Descompletar" : "Completar" }
                  aoClicar={alternarCompletude}
              />
          </div>
        </div>
      </div>
        <p className={styles.conteudo}>{conteudo}</p>
        <p className={styles.data}>Última atualização: {dataFormatada}</p>
    </div>
  );
}

export default DeletarTarefa;

  