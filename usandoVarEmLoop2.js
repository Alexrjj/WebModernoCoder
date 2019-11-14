// Mais um exemplo de loop com Var, mostrando um problema histórico
// do Javascript onde não se é respeitado o escopo de bloco.
const funcoes = []

for (var x = 0; x < 10; x++) {
  funcoes.push(function () {
    console.log(x)
  })
}

// Será sempre exibido o valor de 10 que é o final do loop em questão.
funcoes[2]()
funcoes[8]()
