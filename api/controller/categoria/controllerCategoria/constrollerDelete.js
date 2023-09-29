import Categoria from "../categoria.js"

export const deletarCategoria = async ( req, res ) => {
    const { id } = req.params

    try {
        const deletarCategoria = await Categoria.destroy({ where: { id }})

        if(deletarCategoria) {
            res.status(200).json({message: "Categoria excluída com sucesso."})
        } else {
            res.status(400).json({error: "Categoria não encontrada."})
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: "Erro ao excluir categoria."})
    }
    
}