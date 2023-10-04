import { Sequelize } from "sequelize"
import connection from "../../model/db.js"
import Categoria from "../../controller/categoria/categoria.js"

const Tarefa = connection.define("tarefas", {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    conteudo: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    completa: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
    }
})

Categoria.hasMany(Tarefa)
Tarefa.belongsTo(Categoria)

export default Tarefa
