/*
*nesta pasta foi criado um projeto usando npm init.
*Abaixo foi implementado um módulo Produto que tem uma lista de objetos que faz operação de adicionar 
*elementos a coleção, também de exibilos em lista ou seletivamente usando ID.
*Para manipular a listafoi usado o Express que facilita e oferece rotinas de REST.
*/
const porta = 3303
const express = require('express');
const app = express()

const bodyParser = require('body-parser')

const produto = require('./produto')

app.use(bodyParser.urlencoded({extended: true}));//Módulo do BodyParser cuida de fazer o parser do body das url encoded

app.get('/produtos', (req, resp, next)=>{
    resp.send(produto.getProdutos());
})

app.get('/produto/:id', (req, resp, next)=>{
    resp.send(produto.getProduto(req.params.id));
})

app.post('/produto',(req, resp, next)=>{
    const produtoAux = produto.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    resp.send(produtoAux)
})

app.listen(porta,()=>{
    console.log(`servidor está rodando ${porta} `)
});