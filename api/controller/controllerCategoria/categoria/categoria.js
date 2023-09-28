import { Sequelize } from "sequelize";
import connection from "../../../model/db.js";

const Categoria = connection.define("categorias", {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Categoria
