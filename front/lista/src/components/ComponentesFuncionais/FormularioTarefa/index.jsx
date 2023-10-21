import { useEffect, useState } from "react"
import Botao from "../../ComponentesTipo/Botao/index"
import axios from "axios"
import Input from "../../ComponentesTipo/Input/index"
import styles from "./FormularioTarefa.module.css"
import Titulo from "../../ComponentesTipo/Titulo/index"

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
        <div>
            <Titulo titulo="Crie uma nova tarefa"/>
            <div className={styles.centralizar}>
                <form className={styles.form} onSubmit={criarTarefa}>
                    <div className={styles.caixaInput}>
                        <div>
                            <label htmlFor="titulo">Título:</label> 
                        </div>
                        <Input 
                            type="text" 
                            name="titulo"
                            value={titulo}
                            onChange={mudanca}
                            required
                            placeholder="Informe um título para a tarefa."
                        />
                    </div>
                    <div className={styles.caixaTextArea}>
                        <div>
                            <label htmlFor="conteudo">Conteúdo:</label> 
                        </div>
                        <textarea 
                            className={styles.area}
                            name="conteudo"
                            cols="60" 
                            rows="5"
                            value={conteudo}
                            onChange={mudanca}
                            required
                            placeholder="Informe o conteúdo da tarefa."
                        ></textarea>
                    </div>
                    <div >
                        <p>Selecione uma categoria:</p>
                        <div className={styles.alinhar}>
                           <select className={styles.selecao} onChange={mudancaCategoria} value={categoriaSelecionada}  required>
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
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    )
}

export default FormularioTarefa
