const { getTodosLivros, getLivro, cadastraLivro } = require("../servicos/livro")


function getLivros (req, res) {
    try{
        const livros = getTodosLivros()
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function getLivroById (req, res) {
    try{
        const livros = getLivro(req.param.id)
        res.send(livros)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postLivro (req, res) {
    try{
        const livroNovo = req.body
        console.log(livroNovo)
        cadastraLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivroById,
    postLivro
}