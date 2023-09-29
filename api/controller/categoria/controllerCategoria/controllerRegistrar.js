import Categoria from "../categoria.js"

export const registrarCategoria = async (req, res) => {

    const { name } = req.body

    try{
        const novaCategoria = await Categoria.create({ name })
        res.status(200).json(novaCategoria)
    }catch(error) {
        console.error(error)
        res.status(500).json({error: "Erro ao registrar."})
    }
}