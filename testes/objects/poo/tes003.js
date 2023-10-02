class Dog {
    constructor(name, age, hungry, tired) {
        this.name = name;
        this.age = age;
        this.hungry = hungry;
        this.tired = tired;
    }

    rest() {
        if(this.tired === true) {
            this.tired = false
            console.log(`${this.name} was tired, he slept!`)
        } else {
            this.tired = true 
            console.log(`${this.name} is tired, he need to rest`)
        }
    }

    eat() {
        if(this.hungry === true) {
            this.hungry = false 
            console.log(`${this.name} has just eaten meat`)
        } else {
            console.log(`${this.name} is not hungry`)
        }
    }
}

const dog = new Dog('Duke', 2, false, true)

dog.rest()
dog.eat()

const dog2 = new Dog('Bull', 5, true, false)

dog2.rest()
dog2.eat()