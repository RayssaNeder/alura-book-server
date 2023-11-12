const express = require("express")
const app = express()

const rotaLivro = require("./rotas/livro")

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use("/livros", rotaLivro)



const port = 8000


app.listen(port, () =>{
    console.log(`Escutando a porta ${port}`)
})