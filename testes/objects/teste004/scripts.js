const sendBtn = document.querySelector('#sendBtn');
const select = document.querySelector('#select');
let txt = document.querySelector('#txtn');
let ctrl = document.querySelector('#controls')

let errorMsg = document.createElement('p')
errorMsg.setAttribute('id', 'errorMsg')
errorMsg.textContent = 'Write valid name!'

const person = {}
Object.defineProperties(person, {
    firstName: {
        value: 'Renato',
        writable: true,
        configurable: true
    },
    secondName: {
        value: 'Silva',
        writable: true,
        configurable: true
    },
    lastName: {
        value: 'Augusto',
        writable: true,
        configurable: true
    },
    fullName: {
        get() {
            return [this.firstName, this.secondName, this.lastName].filter(Boolean).join(' '); // filter(Boolean) exclui valores falsy - join(' ') concatena os valores em uma so string
        },
        set(value) {
            const [first, second, last] = value.split(' ', 3)
            this.firstName = first;
            this.secondName = second;
            this.lastName = last;
        }
    }
})

sendBtn.addEventListener('click', () => {
    if (txt.value) {
        person.fullName = txt.value
        let item = document.createElement('option')
        item.text = person.fullName
        select.appendChild(item)




        const thereMsg = document.querySelector('#errorMsg')
        if (thereMsg) {
            ctrl.removeChild(errorMsg);
        }
    } else {
        if (!txt.value) {
            ctrl.appendChild(errorMsg);
        }

    }
})



