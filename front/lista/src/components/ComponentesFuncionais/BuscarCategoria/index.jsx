/*import axios from "axios"
import { useEffect, useState } from "react"


function BuscarCategoria() {

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
            <ul>
                {
                    listaCategoria.map((item) => {
                        <li 
                        key={item.id}>
                            {item.name}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default BuscarCategoria
*/