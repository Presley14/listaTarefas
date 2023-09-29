import Categoria from "../categoria.js"


export const buscarCategoria = async  (req, res) => {
    try{
        const categorias = await Categoria.findAll()
        res.status(200).json({ categorias })
    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao buscar registro."})
    }
}