// Mais um exemplo de loop com Let, mostrando que agora o escopo de bloco
// é respeitado perfeitamente.
const funcoes = []

for (let x = 0; x < 10; x++) {
  funcoes.push(function () {
    console.log(x)
  })
}

// Será exibido o valor da variável no momento em que ela foi passada pelo
// loop. Isso envolve Closure que será tratado mais à frente.
funcoes[2]()
funcoes[8]()
