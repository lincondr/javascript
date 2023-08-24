let num = [1, 3, 5, 8, 2]
num.push(4)
num[0] = 6
num.push(1)
console.log(`Vetor possui ${num.length} posiçoes`)
num.sort()
let pos = num.indexOf(1)
if(pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`O valor 1 esta na posiçao ${pos}`)
}
