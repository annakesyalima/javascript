function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('pic')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora == 1) {
        msg.innerHTML = `Agora são 1 hora.`
    }
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        msg.innerHTML += '<br>Bom dia!</br>'
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        msg.innerHTML += '<br>Boa tarde!</br>'
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        msg.innerHTML += '<br>Boa noite!</br>'
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }

}
