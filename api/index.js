import express from "express"
import cors from "cors"
import connection from "./model/db.js"
import router from "./route/routes.js"
import Categoria from "./controller/categoria/categoria.js"
import Tarefa from "./controller/tarefa/tarefas.js"

const app = express()

app.use(express.json())
app.use(cors())

connection
    .authenticate()
    .then(() => {
        console.log("Conexão feito com o banco dados.")
        return connection.sync()
    })
    .then(() => {
        console.log("Modelos conctados com o banco de dados.")
    })
    .catch((erro)=>{
        console.log(erro)
    })

    app.use("/", router)

const PORTA = 5000
app.listen( PORTA, () => {
   console.log(`O servidor está rodando na porta: ${PORTA}`) 
})
