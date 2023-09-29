import Main from "../components/ComponentesLayout/Main"
import Sidebar from "../components/ComponentesLayout/Sidebar"
import styles from "../styles/CriarCategoria.module.css"
import Footer from "../components/ComponentesLayout/Footer"
import FormularioCategoria from "../components/ComponentesFuncionais/FormularioCategoria/index"
import axios from "axios"
import { useEffect, useState } from "react"

function CriarCategoria() {

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
            <div className={styles.categoria}>
                <Sidebar />
                <Main>
                <FormularioCategoria setListaCategoria={setListaCategoria} />
                </Main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    )
}

export default CriarCategoria
