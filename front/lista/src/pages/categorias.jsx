import axios from "axios"
import Sidebar from "../components/ComponentesLayout/Sidebar"
import Main from "../components/ComponentesLayout/Main"
import Footer from "../components/ComponentesLayout/Footer"
import ListaCategoria from "../components/ComponentesFuncionais/ListaCategoria/listaCategoria"
import styles from "../styles/ListaCategoria.module.css"
import { useState, useEffect } from "react"


function Categorias() {

    const [ listaCategoria, setListaCategoria ] = useState([])

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
    return(
        <div>
            <div className={styles.lista}>
                <Sidebar />
                <Main>
                    <ListaCategoria />
                </Main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Categorias
