import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <input
        type="text"
        value={novoTitulo}
        onChange={(e) => setNovoTitulo(e.target.value)}
      />
      <input
        type="text"
        value={novoConteudo}
        onChange={(e) => setNovoConteudo(e.target.value)}
      />
      <button onClick={atualizarTarefa}>Atualizar Tarefa</button>
    </div>
  );
}

export default AtualizarTarefa;
