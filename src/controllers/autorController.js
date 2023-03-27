import autores from "../Models/Autor.js";

class AutorController {
  static listarAutores = async (req, res) => {
    try {
      const response = await autores.find({});
      res.status(200).json(response);
    } catch (err) {
      res.status(500).send(`Algo deu errado - ${err}`);
    }
  };

  static cadastrarAutor = async (req, res) => {
    try {
      const autor = new autores(req.body);
      await autor.save(autor);
      res.status(201).send("Autor cadastrado!");
    } catch (err) {
      res.status(500).send(`Algo deu errado - ${err}`);
    }
  };

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id;
      await autores.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send("Autor atualizado!")
    } catch (err) {
      res.status(500).send(`Algo deu errado - ${err}`)
    }
  };

  static deletarAutor = async (req, res) => {
    try {
      const id = req.params.id
      await autores.findByIdAndDelete(id)  
      res.status(200).send("Autor deletado!")
    } catch (err) {
      res.status(500).send(`Algo deu errado - ${err}`)

    }
  }
}

export default AutorController;
