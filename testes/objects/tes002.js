//Objetos
// The simplest way to add a value to an object

const person = {}
person.name = 'Carlos';
person.age = 18;

console.log(person)
// using []

const casa = {
    quartos: {}
}

const comodoQ = 'quartos'
const comodoC = 'cozinha'

casa[comodoQ] = 3;
casa[comodoC] = 4;

console.log(casa)

// Object => defineProperty
const house = {}
Object.defineProperty(house, 'kitchen', {
    value: 1,
    writable: true,
})


console.log(house.kitchen)

//Object => defineProperty 
const persons = {}
Object.defineProperties(persons, {
    age: {
        value: 18,
        writable: true,
        configurable: true,
    },
    name: {
        value: 'Carlos',
        writable: true,
        configurable: true,
    },
    height: {
        value: 1.85,
        writable: true,
        configurable: true,
    },
    data: {
        get() {
            return `${this.name} ${this.height} ${this.age} `;
        },
        set(value) {
            const [first, mid, last] = value.split(' ', 3);
            this.name = first;
            this.height = mid;
            this.age = last;
        }
    }
})

const yearsOld = 'age'
persons[yearsOld] += 1;
console.log(persons.data)
console.log(persons.age)

persons.data = 'Jose 1.80 20'

console.log(persons.data)

persons.data = 'Michael 1.75 35'

console.log(persons.data)


