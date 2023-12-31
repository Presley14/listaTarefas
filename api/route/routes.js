import express from "express"
import { registrarCategoria } from "../controller/categoria/controllerCategoria/controllerRegistrar.js"
import { buscarCategoria } from "../controller/categoria/controllerCategoria/controllerBuscar.js"
import { deletarCategoria } from "../controller/categoria/controllerCategoria/constrollerDelete.js"
import { registrarTarefa } from "../controller/tarefa/controllerTarefa/controllerRegistrar.js"
import { buscarTarefa } from "../controller/tarefa/controllerTarefa/controllerBuscar.js"
import { deletarTarefa } from "../controller/tarefa/controllerTarefa/controllerDelete.js"
import { completa } from "../controller/tarefa/controllerTarefa/controllerCompletar.js"
import { atualizarTarefa } from "../controller/tarefa/controllerTarefa/controllerAtualizar.js";



const router = express.Router()


router.post("/registrar/categoria", registrarCategoria)
router.get("/buscar/categoria", buscarCategoria)
router.delete("/deletar/categoria/:id", deletarCategoria)

router.post("/criar/tarefa", registrarTarefa)
router.get("/buscar/tarefa", buscarTarefa)
router.delete("/deletar/tarefa/:id", deletarTarefa)
router.get("/buscar/tarefa/:categoriaId", buscarTarefa)
router.put("/completa/:id", completa)
router.put("/atualizar/tarefa/:id", atualizarTarefa);

export default router
