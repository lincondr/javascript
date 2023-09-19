//Objetos

/* spliting an array
 const fruits = ['apple, grape, orange,'];

const separator = (values) => {
    const [f1, f2, f3] = values[0].split(', ')
    return [f1, f2, f3];
}

const result = separator(fruits)

console.log(result) */


/* const addInfo = () => {
    const name = {}
    Object.defineProperties(name, {
        firstName: {
            value: 'Franklin',
            writable: true,
            configurable: true,
        },
        lastName: {
            value: 'Melnic',
            writable: true,
            configurable: true,
        },
        fullName: {
            get() {
                return `${this.firstName} ${this.lastName}`
            },
            set(newName) {
                const [first, last] = newName.split(' ')
                this.firstName = first;
                this.lastName = last;
            }
        }
    })
    console.log(name.firstName)
    console.log(name.lastName)
    console.log(name.fullName)

    name.fullName = 'Lincon Rodrigues'

    console.log(name.fullName)
}

addInfo() */

const numeros = () => {
    const objetoN = {}
    Object.defineProperties(objetoN, {
        num1: {
            value: 2,
            writable: true,
            configurable: true,
        },
        num2: {
            value: 10,
            writable: true,
            configurable: true,
        },
        change: {
            get() {
                return `Valor 1: ${this.num1}  valor 2: ${this.num2}`
            },
            set(values) {
                const [n1, n2] = values.split(' ')
                const con1 = Number(n1)
                const con2 = Number(n2)

                if (!isNaN(con1) && !isNaN(con2)) {
                    if (n1 > 2 && n2 > 10) {
                        this.num1 = con1;
                        this.num2 = con2;
                    } else {
                        console.error('Valores muito baixo')
                    }
                } else {
                    console.error('Valores Invalidos')
                }
            }
        }
    })

    objetoN.change = '1 10'
    console.log(objetoN.change)
}

numeros()