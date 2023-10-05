import axios from "axios"
import { useEffect, useState } from "react"
import styles from "./TarefasCategoria.module.css"


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
           <div className={styles.categorias}>
                {
                    listaCategoriaId.map(( item )=>(
                        <div className={styles.card} key={ item.id }>
                            <h3 className={styles.titulo}>{ item.titulo }</h3>
                            <p className={styles.conteudo}>{ item.conteudo }</p>
                        </div>
                    ))
                }
            </div> 
        </div>
        
    )
}

export default TarefasCategoria

