let valor = [4, 5, 8, 1, 2, 6]
console.log(valor.length)
valor.sort()
// for(let s = 0; s < valor.length; s++) {
//     console.log(`A posiçao ${s} tem o valor ${valor[s]}`)
// }

for(let s in valor) {
    console.log(`A posiçao ${s} tem o valor ${valor[s]}`)
}

valor.indexOf(5)