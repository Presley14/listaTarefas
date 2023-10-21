import { useEffect, useState } from "react"
import DeletarTarefa from "../DeletarTarefa"
import axios from "axios"
import Titulo from "../../ComponentesTipo/Titulo/index"
import styles from "./ListaTarefa.module.css"
import AtualizarTarefa from "../AtualizarTarefa"

function ListaTarefa() {

    const [ listaTarefa, setListaTarefa ] = useState([])
    const [exibirAtualizar, setExibirAtualizar] = useState([])

    useEffect(() => {
        const buscarTarefa = async () => {
            try{
                const response = await axios.get("http://localhost:5000/buscar/tarefa")
                setListaTarefa(response.data.tarefas)
            } catch(error) {
                console.error(error)
            }
        }
        buscarTarefa()
    }, [])

    
    const alternarExibirAtualizar = (index) => {
        setExibirAtualizar(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    }


    return(
        <div>
            <Titulo titulo="Lista de tarefas"/>
            <div className={styles.caixa}>
               <div className={styles.card}>
                {listaTarefa.slice().reverse().map((item, index) => (
                        <div key={item.id}>
                            <div>
                                <div className={styles.atualizar}>
                                <br /><hr /><br />
                                    <button className={styles.btnatualizar} onClick={() => alternarExibirAtualizar(index)}>
                                    {exibirAtualizar[index]  ? "Sair" : "Atualizar"}
                                    </button>
                                    {exibirAtualizar[index] && (
                                    <div>
                                        <AtualizarTarefa 
                                        setListaTarefa={setListaTarefa}
                                        titulo={item.titulo}
                                        id={item.id}
                                        conteudo={item.conteudo}
                                        completa={item.completa}
                                        ultimaAtualizacao={item.updatedAt}
                                        />
                                    </div>
                                    )}
                                </div>
                                <div>
                                    <DeletarTarefa 
                                        setListaTarefa={setListaTarefa}
                                        titulo={item.titulo}
                                        id={item.id}
                                        conteudo={item.conteudo}
                                        completa={item.completa}
                                        ultimaAtualizacao={item.updatedAt}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default ListaTarefa
