const { Router } = require("express")

const router = Router()

router.get('/', (req, res) => {
    try{
        res.send("Ola Mundo!")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
})

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