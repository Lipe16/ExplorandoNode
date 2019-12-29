/*
* para importar um módulo muito conhecido usarei um comando do npm (gerenciador de pacotes do node): npm  i lodash
*
*/

//como pacote foi instalado em um local de pacotes node, não preciso especificar caminho absoluto ou relativo, o node já sabe onde encontrá-lo.
const _ = require('lodash');

setInterval(()=> console.log(_.random(0,100)), 2000);// a função que veio do módulo importado retorna números randômicos de 0 a 100

