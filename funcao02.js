// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
  console.log(a + b)
}
imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
const Subtracao = (a, b) => {
  return a - b
}
console.log(Subtracao(2, 3))

// Retorno implícito
const divisao = (a, b) => a / b
console.log(divisao(8, 4))

// Ainda mais reduzido
const imprimirValor = x => console.log(x)
imprimirValor('Hello World!')
