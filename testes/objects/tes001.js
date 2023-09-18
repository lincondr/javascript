// OBJETOS
let oper = {
    soma: (n1, n2) => {
        return n1 + n2;
    },
    subt: (n1, n2) => {
        return n1 - n2
    },
    mult: (n1, n2) => {
        return n1 * n2;
    },
    divi: (n1, n2) => {
        return n1 / n2
    }
}

const soma = oper.soma(2, 5);
const mult = oper.mult(4, 4);
const subt = oper.subt(8, 6); 
const divi = oper.divi(10, 5);

console.log(`A soma é ${soma}, A multiplicaçao é ${mult}, A subtraçao é ${subt}, A divisao é ${divi}`)