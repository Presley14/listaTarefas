import { useEffect, useState } from "react"
import Botao from "../../ComponentesTipo/Botao/index"
import axios from "axios"


function FormularioTarefa({ setListaTarefa }) {

    const [ titulo, setValorTitulo ] = useState("")
    const [ conteudo, setValorConteudo ] = useState("")
    const [ categoriaSelecionada, setCategoriaSelecionada ] = useState("")
    const [ categoria, setCategoria ] = useState([])

    useEffect(() => {
        const buscarCategorias = async () => {
            try{
                const response = await axios.get("http://localhost:5000/buscar/categoria")
                setCategoria(response.data.categorias)
            } catch(error) {
                console.error(error)
            }
        }
        buscarCategorias()
    }, [])

    const criarTarefa = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:5000/criar/tarefa",
            {
                titulo,
                conteudo,
                completa: false,
                categoriaId: categoriaSelecionada, // Adiciona a categoria selecionada à requisição
            },
            {
                headers: {
                    "Content-Type":"application/json"
                }
            }
            )

            if ( response.status === 200 ){
                const novoDado = response.data
                setListaTarefa((preList) => [...preList, novoDado])
                setValorTitulo("")
                setValorConteudo("")
                setCategoriaSelecionada("")
            } else{
                console.log("Erro ao cadastrar tarefa.")
            }
            
    } catch(error) {
        console.error(error)
    }}

    const mudanca = (e) => {
        const { name, value } = e.target

        if (name === "titulo") {
            setValorTitulo(value)
        } else if(name === "conteudo") {
            setValorConteudo(value)
        }
    }

    const mudancaCategoria = (e) => {
        setCategoriaSelecionada(e.target.value)
    }

    return(
        <form onSubmit={criarTarefa}>
            <div>
                <input 
                type="text" 
                name="titulo"
                value={titulo}
                onChange={mudanca}
                required
                placeholder="Informe o nome da tarefa."
                />
            </div>
            <div>
                <textarea 
                name="conteudo" 
                cols="60" 
                rows="5"
                value={conteudo}
                onChange={mudanca}
                required
                placeholder="Informe o conteúdo da tarefa."
                ></textarea>
            </div>
            <select onChange={mudancaCategoria} value={categoriaSelecionada}  required>
                <option value="">Selecione uma categora</option>
                {
                    categoria.map((item) => (
                        <option value={item.id} key={item.id}>
                            {item.name}
                        </option>
                    ))
                }
                
            </select>
            <Botao tipo="submit" texto="Criar"/>
        </form>
    )
}

export default FormularioTarefa
