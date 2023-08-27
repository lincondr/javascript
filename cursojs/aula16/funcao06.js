let several = [2, 1, 20, 9, 11]

function isThere(n) {
    if (several.indexOf(n) != -1) {
        return 'There is a number'
    } else {
        return 'there is not a number'
    }
}

console.log(isThere(21))