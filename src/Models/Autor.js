import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, required: true },
    nacionalidade: { type: String },
    anoNascimento: { type: Number}
  }, {collection: "autores"});

const autores = mongoose.model("autores", autorSchema);

export default autores;                  