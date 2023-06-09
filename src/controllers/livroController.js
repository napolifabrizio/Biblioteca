import livros from "../Models/Livro.js";

class LivroController {
  static listarLivros = async (req, res) => {
    try {
      const response = await livros.find({})
      res.status(200).json(response);
    } catch (err) {
      res.status(500).send(`Algo deu errado - ${err}`);
    }
  };

  static cadastrarLivro = async (req, res) => {
    try {
      let livro = new livros(req.body);
      await livro.save(livro);
      res.status(201).json("Livro cadastrado!");
    } catch (err) {
      res.status(500).send(`Algo deu errado - ${err}`);
    }
  };

  static atualizarLivro = async (req, res) => {
    const id = req.params.id;

    try {
      await livros.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send("Livro atualizado com sucesso");
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error.message} - falha ao cadastrar livro` });
    }
  };

  static deletarLivro = async (req, res) => {
    const id = req.params.id;

    try {
      await livros.findByIdAndDelete(id);
      res.status(200).send("Livro deletado com sucesso");
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error.message} - falha ao deletar livro` });
    }
  };
}

export default LivroController;
