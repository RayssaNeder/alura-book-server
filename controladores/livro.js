const { getTodosLivros, getLivro, cadastraLivro, atualizaLivro, removeLivro } = require("../servicos/livro")


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
        const id = req.params.id
        if(id && Number(id)){
            const livros = getLivro(req.params.id)
            res.send(livros)
        } else{
            res.status(422)
            res.send("Id Inválido")
        }

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

function patchLivro (req, res) {
    try{
        const id = req.params.id
        if(id && Number(id)){
            const body = req.body
            const id = req.params.id

            atualizaLivro(body, id)
            res.status(201)
            res.send("Livro atualizado com sucesso")
        }else{
            res.status(422)
            res.send("Id Inválido")
        }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro (req, res) {
    try{

    const id = req.params.id
    if(id && Number(id)){
        removeLivro(id)
        res.status(201)
        res.send("Livro deletado com sucesso")
    }else{
        res.status(422)
        res.send("Id Inválido")
    }
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivroById,
    postLivro,
    patchLivro,
    deleteLivro
}