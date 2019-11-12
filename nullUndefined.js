/* Atribuição por valor funciona com tipos
De dados primitivos, por exemplo:
let b = 4
let c = b
As duas variáveis recebem o valor 4 em cada uma.
Atribuição por referência funciona com tipo
Object, por exemplo:
let b = {nome : "Alex"}
let c = b
As duas variáveis apontam para o mesmo endereço
de memória, ou seja, se mudar a variável c,
A variável b também muda, por exemplo:
c.nome = "Piter"
b = {nome: "Piter"} */

// eslint-disable-next-line prefer-const
let valor // Não inicializada
console.log(valor)

valor = null // Ausência de valor
console.log(valor)
/* console.log(valor.toString()) <- Erro! Impossível ler atributo de
uma variável do tipo null. */

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.49
console.log(produto)

produto.preco = undefined /* Evite atribuit undefined. Se quiser zerar
o valor de uma variável, utilize null */
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null
console.log(produto)
console.log(!!produto.preco)
