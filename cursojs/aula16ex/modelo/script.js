//O programa deve adicionar numeros a um select e um array, depois fazer verificaçoes com esses determinados valores

/* verificar se o numero é invalido */
let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#selist')
let res = document.querySelector('div#res')
let valores = []

function isNumber(n) {
    if (Number(n) > 0 && Number(n) <= 200) {
        return true
    } else {
        return false
    }
}

function isThere(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function disparaComEnter(event) {
    if (event.key == 'Enter') {
        adicionar()
    }
}

function adicionar() {
    if (isNumber(num.value) && !isThere(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Number ${num.value} Included`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Incorrect Number or Number alredy exist!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let len = valores.length
    let menor = valores[0]
    let maior = valores[0]
    let media = 0
    let soma = 0
    for (let seq in valores) {
        if (valores[seq] > maior) {
            maior = valores[seq]
        }
        if (valores[seq] < menor) {
            menor = valores[seq]
        }
        soma += valores[seq]
    }
    media = soma / len

    res.innerHTML = ''
    res.innerHTML += `<p>We've got ${len} numbers</p>`
    res.innerHTML += `<p>The larger number is ${maior}</p>`
    res.innerHTML += `<p>The smaller number is ${menor}</p>`
    res.innerHTML += `<p>The average is ${media}</p>`
    res.innerHTML += `<p>The total is ${soma}</p>`
}

function reset() {
    if (lista.length == 0) {
        alert('No data')
    } else {
        lista.length = ''
        res.innerHTML = ''
    }

}





