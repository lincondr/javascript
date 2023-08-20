//feito por mim
// function contar() {
//     var inicio = document.getElementById('txtn1')
//     var fim = document.getElementById('txtn2')
//     var passo = document.getElementById('txtn3')
//     var res = document.getElementById('res')
//     var ini = Number(inicio.value)
//     var end = Number(fim.value)
//     var pas = Number(passo.value)
//     if (pas > 0) {
//         for (ini; ini <= end; ini += pas) {
//             res.innerHTML += `${ini} &#128073; `
//         }
//     } else {
//         window.alert('Passo invalido! Considerando Passo 1')
//         pas = 1
//         for (ini; ini <= end; ini += pas) {
//             res.innerHTML += `${ini} &#128073; `
//         }
//     }
// }

//resoluçao
function contar() {
    var ini = document.getElementById('txtn1')
    var fim = document.getElementById('txtn2')
    var passo = document.getElementById('txtn3')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel Contar'
        // window.alert('[ERRO] Faltam dados')     
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo invalido! Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
