class Person {
    constructor(name) {
        this.name = name;
    }

    speak = () => {
        console.log(`${this.name} said nice to meet you`)
    }

    wave() {
        console.log(`${this.name} is wavering`)
    }
}

class Person2 extends Person {
    constructor(name) {
        super(name)
    }
    

    speak() {
        console.log(`${this.name} said likewise`)
    }
}

const person = new Person('Jorge')

person.speak()
person.wave()

const person2 = new Person2('Jessica')

person2.speak()