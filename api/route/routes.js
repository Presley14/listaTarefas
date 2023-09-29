import express from "express"
import { registrarCategoria } from "../controller/categoria/controllerCategoria/controllerRegistrar.js"
import { buscarCategoria } from "../controller/categoria/controllerCategoria/controllerBuscar.js"
import { deletarCategoria } from "../controller/categoria/controllerCategoria/constrollerDelete.js"


const router = express.Router()


router.post("/registrar/categoria", registrarCategoria)
router.get("/buscar/categoria", buscarCategoria)
router.delete("/deletar/categoria/:id", deletarCategoria)

export default router
