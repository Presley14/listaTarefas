import axios from "axios"
import Main from "../components/ComponentesLayout/Main"
import Sidebar from "../components/ComponentesLayout/Sidebar"
import Footer from "../components/ComponentesLayout/Footer"
import { useState, useEffect } from "react"
import styles from "../styles/ListaTarefa.module.css"
import DeletarTarefa from "../components/ComponentesFuncionais/DeletarTarefa/index"

function Tarefas() {
    const [ listaTarefa, setListaTarefa ] = useState([])

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
    return(
        <div>
            <div className={styles.lista}>
                <Sidebar />
                <Main>
                    {
                        listaTarefa.map((item) => (
                            <div key={item.id}>
                                <DeletarTarefa 
                                    setListaTarefa={setListaTarefa}
                                    titulo={item.titulo}
                                    conteudo={item.conteudo}
                                    id={item.id}
                                />
                            </div>
                            
                        ))
                    }
                </Main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Tarefas

