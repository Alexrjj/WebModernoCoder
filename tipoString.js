const escola = 'Cod3r'

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // Não retorna erro, mas um espaço em branco.
console.log(escola.charCodeAt(4))
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // Ignora o primeiro item e retorna o resto.
console.log(escola.substring(0, 3)) // Retorna do primeiro ao último número - 1.

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e')) // Pode utilizar Regex

console.log('Ana, Maria, Pedro'.split(',')) // Pode utilizar Regex
