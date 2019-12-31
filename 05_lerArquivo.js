const fs = require('fs')// módulo fileSystem do Node

const caminho = __dirname+"/arquivo.json"

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//Asincrono
fs.readFile(caminho, 'utf-8', (err, conteudo)=>{
    const arquivo = JSON.parse(conteudo);
    console.log(`${arquivo.name}`)
})

//ler diretório e apresentar todos os arquivos em um array
fs.readdir(__dirname, 'utf-8', (erro, conteudo)=>{
    console.log(conteudo)
})
