/*
import axios from "axios"
import Botao from "../../ComponentesTipo/Botao"



function DeletarTarefa({ id, titulo, setListaTarefa, conteudo, completa }) {

    const filtro = (lista) => lista.id !== id

    const deletarTarefa = async () => {

        try{
            const response = await axios.delete(`http://localhost:5000/deletar/tarefa/${id}`)
            setListaTarefa((prevList) => prevList.filter(filtro))
            console.log(response.data)
        } catch(error){
            console.error(error)
        }
        
    }
        return(
            <div>
                <h3 style={{ textDecoration: completa ? "line-through" : "none" }}>{titulo}</h3>

                <p>{conteudo}</p>
                <div>
                    <Botao texto="Excluir" aoClicar={deletarTarefa}/>
                </div>
            </div>
        )
}

export default DeletarTarefa
*/
import axios from "axios"
import Botao from "../../ComponentesTipo/Botao"
import styles from "./DeletarTarefa.module.css"

function DeletarTarefa({ id, titulo, setListaTarefa, conteudo, completa  }) {
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
  
    return (
      <div>
        <h3>
            {completa && <span className={styles.linhaCompleta}>{titulo}</span>}
            {!completa && titulo}
        </h3>
        <p>{conteudo}</p>
        <div>
          <Botao texto="Excluir" aoClicar={deletarTarefa} />
        </div>
      </div>
    );
  }
  
  export default DeletarTarefa;
  