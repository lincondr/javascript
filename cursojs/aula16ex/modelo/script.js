//O programa deve adicionar numeros a um select e um array, depois fazer verificaçoes com esses determinados valores

/* verificar se o numero é invalido */
let num = document.getElementById('txtnum')
let tab = document.getElementById('selist')
let vagas = []
let res = document.getElementById('res')
function adicionar() {
    if (num.value.length == 0) {
        window.alert('Numero invalido')
    } else {/* verificar se esta entre 1 a 100, Adicionar os valores ao select/array */
        let n = (num.value)
        if (n > 0 && n <= 100) {
            let item = document.createElement('option')
            item.text = `${n}`
            tab.appendChild(item)
            vagas.push(n)
        } else {
            window.alert('Numero invalido')
        }
    }
}

/* fazer verificaçoes com esses valores armazenados no array */
function finalizar() {
    if (vagas == 0) {
        alert('Insira os dados necessarios')
    } else {
        res.innerHTML += `<p>Ao todo, temos ${vagas.length} numeros cadastrados</p>`
        let last = vagas[0]
        for (let c = 1; c < vagas.length; c++) {
            if (vagas[c] > last) {
                last = vagas[c]
            }
        }
        res.innerHTML += `<P>O maior numero é ${last}</P>`
        let menor = vagas[0]
        for(let cm = 1; cm < vagas.length; cm++) {
            if(vagas[cm] < menor)
            menor = vagas[cm]
        }
        res.innerHTML += `<p>O menor numero é ${menor}</p>`
    }

}





