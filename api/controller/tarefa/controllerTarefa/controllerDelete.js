import Tarefa from "../tarefas.js"

export const deletarTarefa = async ( req, res ) => {
    const { id } = req.params

    try{
        const deletar = await Tarefa.destroy({ where: {id} })

        if(deletar){
            res.status(200).json({message: "Tarefa excluída com sucesso."})
        } else{
            res.status(500).json({error: "Erro ao excluir tarefa."})
        }
    }catch(error) {
        console.error(error)
        res.status(400).json({error: "Erro ao excluir"})
    }
}
