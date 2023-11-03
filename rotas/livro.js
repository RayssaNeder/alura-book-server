const { Router } = require("express")
const { getLivros, getLivroById } = require("../controladores/livro")

const router = Router()

router.get('/', getLivros)

router.get('/:id', getLivroById)

router.post('/', (req, res) => {
    res.send("Requisiçao Post!")
})

router.put('/', (req, res) => {
    res.send("Requisiçao Put!")
})

router.delete('/', (req, res) => {
    res.send("Requisiçao Delete!")
})
module.exports = router