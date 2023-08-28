let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) //Com isso resetamos o resultado com numeros novos
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    //Depois de adicionar o numero o indicador volta para o input num
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar')
    } else {
        let tol = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let seq in valores) {
            soma += valores[seq]
            if (valores[seq] > maior) {
                maior = valores[seq]
            }
            if (valores[seq] < menor) {
                menor = valores[seq]
            }
        }
        media = soma/tol
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tol} numeros cadastrados</p>`
        res.innerHTML += `<p>O maior numero informado é o ${maior}</p>`
        res.innerHTML += `<p>O menor numero informado é o ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores é ${media}</p>`
    }
}

function limpar() {
    if (lista.length == 0) {
        alert('A lista nao possui nenhum valor')
    } else {
        lista.length = ''
    }
}