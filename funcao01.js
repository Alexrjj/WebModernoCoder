// Função sem retorno
function imprimirSoma (a, b) {
  console.log(a + b)
}
imprimirSoma(2, 3)

imprimirSoma(2) // Retorna NaN pois a var b não foi inicializada
imprimirSoma(2, 3, 4, 5) // Retorna apenas a soma das duas primeiras variáveis
imprimirSoma() // Retorna NaN pois as vars a e b não foram inicializadas

// Função com retorno
function soma (a, b = 1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
