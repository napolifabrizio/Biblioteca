import mongoose from "mongoose";

mongoose.connect("mongodb+srv://FabrizioGIT:teste1234@cluster0.caisrlo.mongodb.net/Biblioteca");

const db = mongoose.connection;

export default db;