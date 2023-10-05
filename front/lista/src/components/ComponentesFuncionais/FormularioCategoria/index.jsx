import { useState } from "react"
import axios from "axios"
import Botao from "../../ComponentesTipo/Botao"
import Titulo from "../../ComponentesTipo/Titulo"
import Input from "../../ComponentesTipo/Input"
import styles from "./FormularioCategoria.module.css"

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
        <div>
            <Titulo titulo="Crie uma nova categoria" />
            <form className={styles.form} onSubmit={cadastrarCategoria}>
                    <div>
                        <label htmlFor="name">Categoria:</label>
                    </div>
                    <Input 
                        type="text"
                        name="name"
                        value={valores.name}
                        onChange={mudarValor}
                        required
                        placeholder="Digite o nome da categoria."
                    />
                    <Botao tipo="submit" texto="Cadastar"></Botao>
            </form>
        </div>
        
        
    )
}

export default FormularioCategoria
