import { Sequelize } from "sequelize";
import connection from "../../model/db.js";

const Categoria = connection.define("categorias", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Categoria
