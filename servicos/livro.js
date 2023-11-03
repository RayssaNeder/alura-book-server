
const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivro(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroEncontrado = livros.filter(livro => livros.id === id)[0]
    return livroEncontrado
}

module.exports = {
    getTodosLivros,
    getLivro
}