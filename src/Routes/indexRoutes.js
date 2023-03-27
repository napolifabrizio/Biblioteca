import routerLivros from "./livroRoutes.js";
import routerAutores from "./autorRoutes.js";
import express from "express";


const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Biblioteca Do Fafa"})
    })

    app.use(
        express.json(),
        routerLivros,
        routerAutores
    )
}

export default routes;