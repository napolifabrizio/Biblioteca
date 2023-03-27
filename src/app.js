import express from "express";
import routes from "./Routes/indexRoutes.js";
import db from "./config/dbConnect.js";

const app = express();

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("A conexão com o banco realizada com sucesso");
});

routes(app)

export default app;