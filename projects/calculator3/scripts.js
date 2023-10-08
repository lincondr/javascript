const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');

class Calculator {
    constructor(
        previousOperationText,
        currentOperationText
    ) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ""
    }

    addDigit(digit) {
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    processOperations(operation) {
        let operationValue;
        // Values to pull off the "soma"
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;

        switch (operation) {
            case "+":
                operationValue = previous + current;
                this.updateScreen(previous, current, operation, operationValue)
                break;
            case "-":
                operationValue = previous - current;
                this.updateScreen(previous, current, operation, operationValue)
                break;
            case "/":
                operationValue = previous / current;
                this.updateScreen(previous, current, operation, operationValue)
                break;
            case "*":
                operationValue = previous * current;
                this.updateScreen(previous, current, operation, operationValue)
                break;
            case "DEL":
                this.processDelOper();
                break;
            case "CE":
                this.processClearOperation()
                break;
            case "C":
                this.processClearAll()
            case "=":
                this.processEqual(operation)
            default:
                return;
        }
    }

    updateScreen(previous = null,
        current = null,
        operation = null,
        operationValue = null
    ) {
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            if (previous === 0) {
                operationValue = current;
            }

            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = " "
        }
    }

    processDelOper() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }

    processClearOperation() {
        this.currentOperationText.innerText = " "
    }

    processClearAll() {
        this.currentOperationText.innerText = " "
        this.previousOperationText.innerText = " "
    }

    processEqual() {
        const operation = this.previousOperationText.innerText.split(" ")[1];
        this.processOperations(operation)
    }
}

const calc = new Calculator(previousOperationText, currentOperationText)

const buttons = document.querySelectorAll('button')
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;
        if (+value >= 0 || value === ".") {
            calc.addDigit(value)
        } else {
            calc.processOperations(value)
        }
    })
})
