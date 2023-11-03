const { getTodosLivros, getLivro } = require("../servicos/livro")


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

module.exports = {
    getLivros,
    getLivroById
}