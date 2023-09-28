import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    timezone: "-03:00"
})

export default connection
