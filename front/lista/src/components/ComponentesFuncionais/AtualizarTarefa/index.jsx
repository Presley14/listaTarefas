import React, { useState } from "react";
import axios from "axios"
import Input from "../../ComponentesTipo/Input/index"
import Botao from "../../ComponentesTipo/Botao"
import styles from "./AtualizarTarefa.module.css"

function AtualizarTarefa({ id, titulo, setListaTarefa, conteudo, completa }) {

    
  const [novoTitulo, setNovoTitulo] = useState(titulo);
  const [novoConteudo, setNovoConteudo] = useState(conteudo);

  const atualizarTarefa = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/atualizar/tarefa/${id}`, {
        titulo: novoTitulo,
        conteudo: novoConteudo,
        completa: completa,
      });
      if (response.status === 200) {
        setListaTarefa((prevList) =>
          prevList.map((item) =>
            item.id === id ? { ...item, titulo: novoTitulo, conteudo: novoConteudo } : item
          )
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.caixa}>
        <div className={styles.titulo}>
          <Input 
          type="text"
          value={novoTitulo}
          onChange={(e) => setNovoTitulo(e.target.value)}
        />
        </div>
        <div className={styles.btn_input}>
            <div className={styles.conteudo}>
              <textarea
                name="conteudo"
                cols="50"
                rows="5"
                value={novoConteudo}
                onChange={(e) => setNovoConteudo(e.target.value)}>
              </textarea>
              <div className={styles.btn}>
                <Botao
                  aoClicar={atualizarTarefa}
                  texto="Concluir"
                />
              </div>
            </div>
        </div>
    </div>
  )
}

export default AtualizarTarefa;
