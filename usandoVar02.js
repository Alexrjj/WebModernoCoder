/* eslint-disable no-redeclare */
/* eslint-disable no-lone-blocks */
// Não existe escopo de bloco quando se trabalha com o Var
// A variável se torna acessível tanto dentro quando fora
// da função. Por exemplo:
var numero = 1
{
  var numero = 2
  console.log('dentro = ', numero)
}
console.log('fora = ', numero)
