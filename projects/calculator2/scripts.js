const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');

class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = "";
    }

    addDigit(digit) {
        if (digit === "." && this.currentOperationText.innerText.includes(".")) {
            return;
        }

        this.currentOperation = digit;
        this.updateScreen();
    }

    // Process all Calculator operations   
    processOperation(operation) {
        // check if current value is empty
        if (this.currentOperationText.innerText === " ") {
            console.log("sim")
            if (this.previousOperationText.innerText !== " ") {
                this.changeOperation(operation);
            }
            return;
        }

        // Get current and previous value
        let operationValue;
        // Get only the numbers from previous value
        const previous = +this.previousOperationText.innerText.split(" ")[0];
        const current = +this.currentOperationText.innerText;


        switch (operation) {
            case "+":
                operationValue = previous + current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "-":
                operationValue = previous - current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "/":
                operationValue = previous / current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "*":
                operationValue = previous * current
                this.updateScreen(operationValue, operation, current, previous)
                break;
            case "DEL":
                this.processDelOperation();
                break;
            case "C":
                this.processClearOperation();
                break;
            case "CE":
                this.processClearAll();
                break;
            default:
                return
        }
    }

    // Changes Values of the calculator
    updateScreen(operationValue = null,
        operation = null,
        current = null,
        previous = null
    ) {
        if (operationValue === null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // check if value is zero, if so, just add current value
            if (previous === 0) {
                operationValue = current;
            }

            // Add previous operation to previous screen
            this.previousOperationText.innerText = `${operationValue} ${operation}`;
            this.currentOperationText.innerText = "";
        }
    }
    // change Math operation
    changeOperation(operation) {
        const mathOperations = ["/", "*", "+","-"];
        
        if(!mathOperations.includes(operation)) {
            return;
        }

        const previousText = this.previousOperationText.innerText.trim();

        if (mathOperations.includes(previousText.charAt(previousText.lentgh -1))) {
            console.log(operation)
        } else {
            this.previousOperationText.innerText += `${operation}`
        }

        
    }

    processDelOperation() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1);
    }

    processClearOperation() {
            this.currentOperationText.innerText = "";
    }

    processClearAll() {  
            this.previousOperationText.innerText = ""
            this.currentOperationText.innerText = ""  
    }


}

const calc = new Calculator(previousOperationText, currentOperationText)

const buttons = document.querySelectorAll('button')
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        e.target;
        let btnValue = e.target.innerText;

        if (+btnValue >= 0 || btnValue === ".") {
            
            calc.addDigit(btnValue);
        } else {

            calc.processOperation(btnValue)
        }
    })
})