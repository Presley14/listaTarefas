import { useState } from "react"
import axios from "axios"
import Botao from "../../ComponentesTipo/Botao"


function FormularioCategoria({ setListaCategoria }) {

    const [ valores, setValores ] = useState({name:""})

    const mudarValor = (e) => {
        const { name, value } = e.target
        setValores((preValores) => ({...preValores, [name]: value}))
    }

    const cadastrarCategoria = async (e) => {
        e.preventDefault()
        try{
            const response = await axios.post("http://localhost:5000/registrar/categoria", valores, {
                headers: {
                    "Content-Type":"application/json",
                },
            })

            if(response.status === 200){
                const newData = response.data
                setListaCategoria((prevList) => [ ...prevList, newData ] )
                setValores({name:""})
                console.log(valores)
            } else {
                console.error("Erro ao criar registro")
            }
        } catch( error ) {
            console.error( error )
        }
    }
    return(
        <form onSubmit={cadastrarCategoria}>
            <input 
            type="text"
            name="name"
            value={valores.name}
            onChange={mudarValor}
            required
            placeholder="Digite o nome da categoria."
            />
            <Botao tipo="submit" texto="Cadastar"></Botao>
        </form>
    )
}

export default FormularioCategoria
