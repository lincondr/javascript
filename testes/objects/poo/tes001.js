class Person {
    constructor(firstName, age, favFood) {
        this.Name = firstName,
        this.age = age,
        this.Food = favFood  
    }

    static say() {
        console.log('Have a good one')
    }
}

const person = new Person('jose', 20, 'hamburguer')

Person.say();
