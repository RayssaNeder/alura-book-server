
const fs = require("fs")

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getLivro(id){
    console.log(id)
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroEncontrado = livros.filter(livro => livro.id === id)[0]
    return livroEncontrado
}

function cadastraLivro(livro){
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    fs.writeFileSync("livros.json", JSON.stringify([...livros, livro ]))
}

function atualizaLivro(livroUpdate, id){

    console.log(livroUpdate)
    console.log(id)


    let livros = JSON.parse(fs.readFileSync("livros.json"))

    const indiceModificado = livros.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livros[indiceModificado], ...livroUpdate  }

    livros[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livros))
}

module.exports = {
    getTodosLivros,
    getLivro,
    cadastraLivro, 
    atualizaLivro
}