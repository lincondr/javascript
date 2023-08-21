function contar() {
    var ini = document.getElementById('numi')
    var fim = document.getElementById('numf')
    var passo = document.getElementById('nump')
    let res = document.getElementById('res')
    //Caso alguma das caixas nao seja preenchida isso ocorre
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha todos os dados')
    } else {//Se nao o codigo prossegue normalmente
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando: <br>'
        if (p == 0) {
            window.alert('Passo nao pode ser 0! Considerando Passo igual a 1')
            p = 1
        }
        if (i < f) {//Crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {//Decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}


//resoluçao
// function contar() {
//     var ini = document.getElementById('txtn1')
//     var fim = document.getElementById('txtn2')
//     var passo = document.getElementById('txtn3')
//     let res = document.getElementById('res')

//     if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
//         res.innerHTML = 'Impossivel Contar'
//         // window.alert('[ERRO] Faltam dados')     
//     } else {
//         res.innerHTML = 'Contando: <br>'
//         var i = Number(ini.value)
//         var f = Number(fim.value)
//         var p = Number(passo.value)
//         if (p <= 0){
//             window.alert('Passo invalido! Considerando Passo 1')
//             p = 1
//         }
//         if (i < f) {
//             //Contagem crescente
//             for (let c = i; c <= f; c += p) {
//                 res.innerHTML += `${c} \u{1F449}`
//             }
            
//         } else {
//             //Contagem regressiva
//             for(let c = i; c >= f; c -= p){
//                 res.innerHTML += `${c} \u{1F449}`
//             }
//         }
//         res.innerHTML += `\u{1F3C1}`
//     }
// }
