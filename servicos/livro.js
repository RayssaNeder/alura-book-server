
const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivro(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroEncontrado = livros.filter(livro => livro.id === id)[0]
    return livroEncontrado
}

function cadastraLivro(livro){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    fs.writeFileSync("livros.json", JSON.stringify([...livros, livro ]))
}

function atualizaLivro(livroUpdate, id){

    let livros = JSON.parse(fs.readFileSync("livros.json"))

    const indiceModificado = livros.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livros[indiceModificado], ...livroUpdate  }

    livros[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

function removeLivro(id){

    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livrosFiltrados = livros.filter(livro => livro.id !== id)

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}

module.exports = {
    getTodosLivros,
    getLivro,
    cadastraLivro, 
    atualizaLivro,
    removeLivro
}