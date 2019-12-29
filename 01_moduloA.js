/*
* node tem um sistema de módulos, cada arquivo é um módulo  e módulos podem ser exportados para que sejam importados em outros arquivos
*Nos exemplos a seguir é mostrado como exportar funções e váriaveis.
*/
this.ola = ()=>{ return "Olá mundo!"}
exports.node = "Node é 10!"
module.exports.data = new Date() 