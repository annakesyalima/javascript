function calcular() {
    var num = document.getElementById('num')
    var res = document.getElementById('seltab')
    var n = Number(num.value)
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        res.innerHTML = ''
        for (var c = 1; c <= 10; c++ ) {
           var item = document.createElement('option')
           item.text = `${n} x ${c} = ${n*c}`
           item.value = `res${c}`
           res.appendChild(item)
        }
    }
}