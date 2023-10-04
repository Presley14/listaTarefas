
import { useEffect, useState } from "react"
import DeletarTarefa from "../DeletarTarefa"
import axios from "axios"


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
            <div>
                {listaTarefa.map((item) => (
                        <div key={item.id}>
                            <div >
                                <div>
                                    <DeletarTarefa 
                                        setListaTarefa={setListaTarefa}
                                        titulo={item.titulo}
                                        id={item.id}
                                        conteudo={item.conteudo}
                                        completa={item.completa}
                                    />
                                </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListaTarefa
