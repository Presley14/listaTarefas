import axios from "axios"
import Botao from "../../ComponentesTipo/Botao"



function DeletarTarefa({ id, titulo, setListaTarefa }) {

    const filtro = (lista) => lista.id !== id

    const deletarTarefa = async () => {

        try{
            const response = await axios.delete(`http://localhost:5000/deletar/tarefa/${id}`)
            setListaTarefa((prevList) => prevList.filter(filtro))
            console.log(response.data)
        } catch(error){
            console.error(error)
        }
        
    }
        return(
            <div>
                <h3>{titulo}</h3>
                <div>
                    <Botao texto="Excluir" aoClicar={deletarTarefa}/>
                </div>
            </div>
        )
}

export default DeletarTarefa
