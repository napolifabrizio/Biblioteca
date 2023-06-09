import express from "express";
import AutorController from "../controllers/autorController.js";

const router = express.Router()

router
    .get("/autores", AutorController.listarAutores)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.deletarAutor)


export default router;