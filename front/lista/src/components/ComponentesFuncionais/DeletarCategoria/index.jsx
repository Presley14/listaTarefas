import Botao from "../../ComponentesTipo/Botao"
import axios from "axios"




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
        <div>
            <h3>{nome}</h3>
            <Botao aoClicar={btnDeletar} texto="Excluir"/>
        </div>
    )
}

export default DeletarCategoria
