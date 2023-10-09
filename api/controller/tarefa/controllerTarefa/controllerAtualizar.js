import Tarefa from "../tarefas.js";

export const atualizarTarefa = async (req, res) => {
  const { id } = req.params;
  const { titulo, conteudo, completa } = req.body;

  try {
    const atualizar = await Tarefa.update(
      { titulo, conteudo, completa },
      { where: { id } }
    );

    if (atualizar[0]) {
      res.status(200).json({ message: "Tarefa atualizada com sucesso." });
    } else {
      res.status(500).json({ error: "Erro ao atualizar tarefa." });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Erro ao atualizar." });
  }
};