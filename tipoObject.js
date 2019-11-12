const prod1 = {}
prod1.nome = 'PC Ultra Rápido'
prod1.preco = 4558.99
prod1['Desconto Legal'] = 0.40 // Apesar de possível, evitar atributos com espaço.

console.log(prod1)

const prod2 = {
  nome: 'Galaxy S9 128GB',
  preco: 1349.90
}

console.log(prod2)

// JSON (JavaScript Object Notation) é diferente de um Object
// Por ser apenas notação de texto, exemplo:
// { "nome": "ASUS X550LN" , "preco": 1899.90 }
