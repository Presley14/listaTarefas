import Tarefa from "../tarefas.js"

export const completa = async (req, res) => {
    const { id } = req.params;
    try {
        const tarefa = await Tarefa.findByPk(id);
        if (tarefa) {
            await tarefa.update({ completa: true });
            res.status(200).json({ message: "Tarefa marcada como completa." });
        } else {
            res.status(404).json({ message: "Tarefa não encontrada." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao marcar a tarefa como completa." });
    }
}