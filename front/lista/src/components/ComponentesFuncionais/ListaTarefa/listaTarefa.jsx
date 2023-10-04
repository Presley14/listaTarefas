
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

    const completarTarefa = async (indiceTarefa) => {
        try {
            const response = await axios.put(`http://localhost:5000/completa/${indiceTarefa}`);
            if (response.status === 200) {
                setListaTarefa(prevLista => prevLista.map((item) => {
                    if (item.id === indiceTarefa) {
                        return { ...item, completa: true }; // Adiciona um novo campo 'completa' no objeto
                    }
                    return item;
                }));
            }
        } catch (error) {
            console.error(error);
        }
    }
    
    return(
        <div>
            <div>
                {
                    listaTarefa.map((item) => (
                        <div key={item.id}>
                            <div >
                                <div>
                                    <DeletarTarefa 
                                        setListaTarefa={setListaTarefa}
                                        titulo={item.titulo}
                                        id={item.id}
                                        completa={item.completa}
                                    />
                                </div>
                            </div>
                            <button
                                onClick={() => completarTarefa(item.id)}
                                className={item.completa ? styles.completada : ""}
                            >
                                {item.titulo}
                            </button>

                        </div>
                        
                    
                    ))
                }
            </div>
        </div>
    )
}

export default ListaTarefa
