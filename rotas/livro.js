const { Router } = require("express")
const { getLivros, getLivroById, postLivro, patchLivro } = require("../controladores/livro")

const router = Router()


router.get('/', getLivros)

router.get('/:id', getLivroById)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/', (req, res) => {
    res.send("Requisiçao Delete!")
})
module.exports = router