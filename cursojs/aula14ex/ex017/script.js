// function gerar() {
//     let num = document.getElementById('txtnum')
//     let tab = document.getElementById('seltab')
//     if (num.value.length == 0) {
//         window.alert('Por favor, digite um numero')
//     } else {        
//         let n = Number(num.value)
//         let c = 1
//         tab.innerHTML = ''
//         while (c <= 10) {
//             let item = document.createElement('option')
//             item.text = `${n} X ${c} = ${n*c}`
//             item.value = `tab${c}`
//             tab.appendChild(item)
//             c++
//         }
//     } 
// }

function gerar() {
    var num = document.getElementById('tnum')
    var tab = document.getElementById('selnum')
    if (num.value.length == 0) {
        window.alert('Por favor! insira um dado')
    } else {
        n = Number(num.value)
        c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            c++
            tab.appendChild(item)
        }
        
    }
    
}