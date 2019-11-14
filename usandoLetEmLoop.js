// Por Let ter escopo de bloco, a variável NÃO estará diponível
// fora do loop, por exemplo:
for (let x = 0; x < 10; x++) {
  console.log(x)
}
// console.log('x = ', x) <- Gera erro pela variável não estar acessível!
