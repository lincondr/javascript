let num = document.querySelector('#txtnum');
let res = document.querySelector('#results');
let list = document.querySelector('select')
const sendBtn = document.querySelector('#sendBtn');
const clearBtn = document.querySelector('#clearBtn');
const showBtn = document.querySelector('#showBtn');
const msg = document.querySelector('.main-input')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 200) {
        return true
    } else {
        return false
    }
}

function inLista(n, vs) {
    if (vs.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

sendBtn.addEventListener('click', () => {
    /*Error message*/
    let erroMsg = document.createElement('p')
    erroMsg.setAttribute('id', 'erroMsg')
    erroMsg.textContent = "Please send a valid number!"

    if (isNumber(num.value) && !inLista(num.value, values)) {
        values.push(Number(num.value))

        let item = document.createElement('option')
        item.innerText = `Number ${num.value} included`
        list.appendChild(item)
        res.innerHTML = ''

        num.value = ''
        num.focus()

        let existingMsg = msg.querySelector('#erroMsg')
        if (existingMsg) {
            msg.removeChild(existingMsg)
        }
    } else {
        let existingMsg = msg.querySelector('#erroMsg')
        if (existingMsg) {
            msg.removeChild(existingMsg)
        }
        msg.appendChild(erroMsg)
    }
})

clearBtn.addEventListener('click', () => {

    values = []
    list.innerHTML = ''
    res.innerHTML = ''

})

showBtn.addEventListener('click', () => {
    if (values.length == 0) {
        alert('Please, send any value first!')
    } else {
        let total = 0;
        let greater = values[0];
        let smaller = values[0];

        for (let seq = 0; seq < values.length; seq++) {
            const currentValue = Number(values[seq])
            total += values[seq];

            if (values[seq] > greater) {
                greater = currentValue
            }
            if (values[seq] < smaller) {
                smaller = currentValue
            }
        }

        res.innerHTML += `<p>List has ${values.length} Numbers</p>`
        res.innerHTML += `<p>The total is ${total}</p>`
        res.innerHTML += `<p>The greatest Number is ${greater}</p>`
        res.innerHTML += `<p>The smallest Number is ${smaller}</p>`

    }

})


