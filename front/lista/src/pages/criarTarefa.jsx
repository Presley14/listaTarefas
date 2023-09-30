import Sidebar from "../components/ComponentesLayout/Sidebar"
import Main from "../components/ComponentesLayout/Main"
import Footer from "../components/ComponentesLayout/Footer"
import FormularioTarefa from "../components/ComponentesFuncionais/FormularioTarefa"
import styles from "../styles/CriarTarefa.module.css"
import { useEffect, useState } from "react"
import axios from "axios"

function CriarTarefa() {

    const [ listaTarefa, setListaTarefa ] = useState([])

    useEffect(() => {
        const buscTarefas = async () => {
            try{
                const response = await axios.get("http://localhost:5000/buscar/tarefa")
                setListaTarefa(response.data.tarefas)
            }catch(error) {
                    console.error(error)
            }
        }
        buscTarefas()
    }, [])
    return(
        <div>
            <div className={styles.tarefas}>
                <Sidebar />
                <Main>
                <FormularioTarefa setListaTarefa={setListaTarefa}/>
                </Main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}


export default CriarTarefa
