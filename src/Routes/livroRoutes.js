import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.deletarLivro)


export default router;