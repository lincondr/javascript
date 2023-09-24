
const person = {};
Object.defineProperties(person, {
    name: {
        value: "Carlos",
        writable: true,
        configurable: false
    },
    age: {
        value: 23,
        writable: true,
        configurable: true
    },
    city: {
        value: "Campo Limpo PTS",
        writable: true,
        configurable: false,
    },

    birthYear: {
        value: function () {
            const currentYear = new Date().getFullYear();
            return currentYear - this.age;
        },
        writable: true,
        configurable: false
    },
    isAdult: {
        value: {},
        writable: true,
        configurable: false
    },
    underage: {
        get() {
            if (this.isAdult) {
                return `you were born in ${this.birthYear()} you're not underage`
            } else {
                return `you were born in ${this.birthYear()} you're not adult`
            }
        },
        set(value) {
            if(value < 2006) {
                return this.isAdult = true
                
            } else {
                return this.isAdult = false
            }
        }
    }
})

console.log(person.underage)
console.log(person.birthYear())
person.age = 15
console.log(person.underage)