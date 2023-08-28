let num = document.querySelector('input#nums')
let res = document.querySelector('div#res')
let lista = document.querySelector('select#selist')
let valores = []

function isANumber(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function isThere(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

/*Os argumentos de isThere e isANumber sao passados para as funçoes acima e sao convertidos para valores numericos*/
/* A ! serve para negar booleana, e portanto inverte os valores, se isANumber retornar true  sera falso para !isANumber */

function adicionar() {
    if (isThere(num.value) && !isANumber(num.value, valores)) {
        let item = document.createElement('option')
        item.text = Number(num.value)
        lista.appendChild(item)
    } else {
        return alert('deu ruim')
    }
}