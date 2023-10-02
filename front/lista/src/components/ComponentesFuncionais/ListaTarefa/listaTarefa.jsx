/*
import { useEffect, useState } from "react"
import DeletarTarefa from "../DeletarTarefa"
import axios from "axios"
import Sidebar from "../../ComponentesLayout/Sidebar"
import Main from "../../ComponentesLayout/Main"
import Footer from "../../ComponentesLayout/Footer"


function ListaTarefa() {

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

export default ListaTarefa
*/