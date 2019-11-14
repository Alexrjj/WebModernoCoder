/* eslint-disable no-lone-blocks */
{
  {
    {
      {
        var sera = 'Será que executa?'
      }
    }
  }
}
console.log(sera) // Executa normalmente a variável
// que está entre as chaves.

function teste () {
  var local = 123
  console.log(local)
}
teste()
// console.log(local) <- Gera erro devido a variável estar fora
// de escopo, ou seja, acessível apenas dentro da função.
