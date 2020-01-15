/*
Ao executar um arquivo no node é possível passar parâmetros como arquivo.js -a
De modo que em tempo de execução é possível acessar os parâmetros
*/

const anonimo = process.argv.indexOf('-a') !== -1;

if(anonimo){
    console.log("olá anonimo")
    process.exit();
}else{
    // é possível também escrever no console e recuperar entradas do usuario em console.
    process.stdout.write("escreva seu nome: ");

    process.stdin.on('data', data=>{
        const nome = data.toString().replace("\r\n", "")

        process.stdout.write(`Bem vindo ${nome}`) 
        process.exit();

    })
}