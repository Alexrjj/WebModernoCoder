// Por Var não ter escopo de bloco, a variável estará diponível
// fora do loop, por exemplo:
for (var x = 0; x < 10; x++) {
  console.log(x)
}
console.log('x = ', x) // 10
