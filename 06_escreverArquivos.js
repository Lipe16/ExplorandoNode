const fs = require('fs')// módulo fileSystem do Node

const produto = {
    "produto":{
        "cor":"azul",
        "preco": 2.80
    }
}

// escrevendo/criando arquivo
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), (err)=>{
    console.log(err || "salvo com sucesso!")
})