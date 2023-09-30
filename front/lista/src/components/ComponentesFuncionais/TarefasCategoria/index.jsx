import axios from "axios"
import { useEffect, useState } from "react"


function TarefasCategoria({ categoriaId }) {

    const [ listaCategoriaId, setListaCategoriaId ] = useState([])

    const filtro = ( lista ) => lista.categoriaId === categoriaId

    useEffect(() => {
        const buscarCategoriaId = async () => {
        try{
            const response = await axios.get(`http://localhost:5000/buscar/tarefa/${ categoriaId }`)
            setListaCategoriaId(response.data.tarefas.filter(filtro))
        }catch( error ) {
            console.error( error )
        }
    }
    buscarCategoriaId( categoriaId )
    },[ categoriaId ])
    
    return(
        <div>
            {
                listaCategoriaId.map(( item )=>(
                    <div key={ item.id }>
                        <h3>{ item.titulo }</h3>
                        <p>{ item.conteudo }</p>
                    </div>
                ))
            }
        </div>
    )
}

export default TarefasCategoria

