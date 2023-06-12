var agora = new Date()
var hora = agora.getHours()
if (hora == 1) {
    console.log('São 1 hora.')
} else {
    console.log(`São ${hora} horas.`)
}
if (hora > 5 && hora < 12) {
    console.log('Bom dia!')
} else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}