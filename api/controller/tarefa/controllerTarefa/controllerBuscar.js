import Tarefa from "../tarefas.js"



export const buscarTarefa = async ( req, res ) => {

    try {
        const tarefas = await Tarefa.findAll()
        res.status(200).json({tarefas})
    } catch(error) {
        console.error(error)
        res.status(400).json({error: "Erro ao buscar as tarefas."})
    }
}