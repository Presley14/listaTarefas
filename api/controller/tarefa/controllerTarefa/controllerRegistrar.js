import Tarefa from "../tarefas.js"

export const registrarTarefa = async ( req, res ) => {
    const { titulo, conteudo, completa, categoriaId } = req.body

    try{
        const novatarefa = await Tarefa.create({ titulo, conteudo, completa, categoriaId})
        res.status(200).json(novatarefa)
    } catch(error) {
        console.error(error)
        res.status(400).json({error: "Erro ao cadastrar tarefa."})
    }
}