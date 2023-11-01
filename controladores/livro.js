const { getTodosLivros } = require("../servicos/livro")


function getLivros (req, res) {
    try{
        res.send(getTodosLivros())
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}