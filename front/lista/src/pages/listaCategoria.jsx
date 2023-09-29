import axios from "axios"
import { useEffect, useState } from "react"
import Sidebar from "../components/ComponentesLayout/Sidebar"
import Main from "../components/ComponentesLayout/Main"
import Footer from "../components/ComponentesLayout/Footer"
import styles from "../styles/ListaCategoria.module.css"
import DeletarCategoria from "../components/ComponentesFuncionais/DeletarCategoria"


function ListaCategoria() {

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
                    <div>
                        
                        {listaCategoria.map((item) => (
                                <div key={item.id}>
                                    
                                    <DeletarCategoria
                                    id={item.id}
                                    nome={item.name}
                                    setListaCategoria={setListaCategoria} />
                                    
                                </div>
                            ))
                        }
                    </div>
                </Main>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default ListaCategoria
