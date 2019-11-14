/* eslint-disable prefer-const */
// O Let trabalha com escopo global e local, por exemplo:
let numero = 1
{
  let numero = 2
  console.log('dentro = ', numero) // 2
}
console.log('fora =', numero) // 1
