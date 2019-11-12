const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({ id: 3 }, false, null, 'teste') // Adiciona valores ao Array.
console.log(valores)

console.log(valores.pop()) // Remove o último valor do Array.
delete valores[0] // Deleta um valor pelo número do índice.
console.log(valores)

console.log(typeof valores)
