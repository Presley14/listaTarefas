import Botao from "../../ComponentesTipo/Botao"
import axios from "axios"
import styles from "./DeletarCategoria.module.css"



function DeletarCategoria({ nome, id, setListaCategoria }) {

    const filtro = (indice) => indice.id !== id
    
    const btnDeletar = async () => {
        try{
            const response = await axios.delete(`http://localhost:5000/deletar/categoria/${id}`)
            setListaCategoria((prevList) => prevList.filter(filtro))
            console.log(response.data)
        } catch (error) {
            console.error("Erro ao excluir", error)
        }
    }

    return(
        <div className={styles.caixa}>
            <div>
               <h3 className={styles.nome}>{nome}</h3> 
            </div>
            <div>
               <Botao aoClicar={btnDeletar} texto="Excluir"/> 
            </div>
            
        </div>
    )
}

export default DeletarCategoria
