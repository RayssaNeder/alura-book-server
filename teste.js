const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novodado =  { id: '3', nome: 'Livro novo' }

fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novodado ]))

console.log(dadosAtuais)