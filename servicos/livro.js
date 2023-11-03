
const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivro(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroEncontrado = livros.filter(livro => livros.id === id)[0]
    return livroEncontrado
}

function cadastraLivro(livro){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    fs.writeFileSync("livros.json", JSON.stringify([...livros, livro ]))
}

module.exports = {
    getTodosLivros,
    getLivro,
    cadastraLivro
}