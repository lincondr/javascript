let bag = [5, 4, 9, 10]
let maiorNumero =  bag[0]
for(let c = 1; c < bag.length; c++){
    if (bag[c] > maiorNumero) {
        maiorNumero = bag[c]
    }
}

console.log(maiorNumero)
