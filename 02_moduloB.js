/*
* node tem um sistema de módulos, cada arquivo é um módulo  e módulos podem ser exportados para que sejam importados em outros arquivos
*Nos exemplos a seguir é mostrado como exportar funções e váriaveis.
* note que desta maneira é possível substituir o contexto de objetos importador
*/
console.log(module.exports)

module.exports = {
    node:"Node é muito top!!!",
}

console.log(module.exports)