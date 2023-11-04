const { Router } = require("express")
const { getLivros, getLivroById, postLivro, patchLivro, deleteLivro } = require("../controladores/livro")

const router = Router()


router.get('/', getLivros)

router.get('/:id', getLivroById)

router.post('/', postLivro)

router.patch('/:id', patchLivro)

router.delete('/:id', deleteLivro)
module.exports = router