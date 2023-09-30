import axios from "axios"
import { useEffect, useState } from "react"
import DeletarCategoria from "../DeletarCategoria"
import TarefasCategoria from "../TarefasCategoria"


function ListaCategoria() {

    const [ listaCategoria, setListaCategoria ] = useState([])
    const [ categoriaSelecionada, setCategoriaSelecionda ] = useState(null)
    const [ mostrarConteudo, setMostrarConteudo ] = useState(false)

    useEffect(() => {
        const solicitarCategoria = async () => {
            try{
                const response = await axios.get("http://localhost:5000/buscar/categoria")
                setListaCategoria(response.data.categorias)
            }catch(error) {
                console.log(error)
                console.error("Erro ao buscar o registro", error)
            }
        }

        solicitarCategoria()
    }, [])

    const visualizarTarefas = (indiceCategoria) => {
        if( categoriaSelecionada === indiceCategoria && mostrarConteudo ){
            setCategoriaSelecionda(null)
            setMostrarConteudo(false)
            
        } else{
            setCategoriaSelecionda(indiceCategoria)
            setMostrarConteudo(true)
        }
    }
    
    return(
        <div>
            <div>
                {listaCategoria.map((item) => (
                    <div key={item.id}>
                        <div>
                            <DeletarCategoria
                            id={item.id}
                            nome={item.name}
                            setListaCategoria={setListaCategoria} />
                        </div>
                        <button onClick={ () => visualizarTarefas( item.id )}>
                            {categoriaSelecionada === item.id && mostrarConteudo ? "Ocultar" : "Visualizar"}
                        </button>
                        <div>
                            {categoriaSelecionada === item.id && (
                                <TarefasCategoria categoriaId={categoriaSelecionada}/>
                            )}  
                        </div> 
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ListaCategoria
