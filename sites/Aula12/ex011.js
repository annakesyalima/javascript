var idade = 550
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 66) {
    console.log(`Voto optional`)
} else {
    console.log('Voto obrigatorio')
}