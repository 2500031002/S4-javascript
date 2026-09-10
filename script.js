// State variables
let currentDisplay = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// Grab the display element
const displayElement = document.getElementById('display');

// Update the screen with the current display value
function updateDisplay() {
    // Limit the display length to prevent overflow
    if (currentDisplay.length > 12) {
        displayElement.innerText = currentDisplay.substring(0, 12);
    } else {
        displayElement.innerText = currentDisplay;
    }
}

// Add a number or a decimal to the screen
function appendNumber(number) {
    if (waitingForSecondOperand) {
        currentDisplay = number;
        waitingForSecondOperand = false;
    } else {
        // Prevent adding multiple decimals
        if (number === '.' && currentDisplay.includes('.')) return;
        
        // Overwrite '0' if it's the first number, otherwise append
        currentDisplay = currentDisplay === '0' && number !== '.' ? number : currentDisplay + number;
    }
    updateDisplay();
}

// Set the math operation (+, -, *, /)
function setOperation(op) {
    // If we already have an operator and aren't waiting for a new number, calculate first
    if (operator && !waitingForSecondOperand) {
        calculate();
    }
    
    firstOperand = parseFloat(currentDisplay);
    operator = op;
    waitingForSecondOperand = true;
}

// Calculate the result
function calculate() {
    if (operator === null || waitingForSecondOperand) return;
    
    let secondOperand = parseFloat(currentDisplay);
    let result = 0;
    
    switch(operator) {
        case '+': result = firstOperand + secondOperand; break;
        case '-': result = firstOperand - secondOperand; break;
        case '*': result = firstOperand * secondOperand; break;
        case '/': 
            if (secondOperand === 0) {
                currentDisplay = 'Error';
                operator = null;
                firstOperand = null;
                updateDisplay();
                return;
            }
            result = firstOperand / secondOperand; 
            break;
    }
    
    // Round to avoid weird floating point issues (like 0.1 + 0.2 = 0.30000000000000004)
    result = Math.round(result * 1000000000) / 1000000000;
    
    currentDisplay = String(result);
    operator = null;
    firstOperand = null;
    waitingForSecondOperand = true; // Prepare for the next operation
    updateDisplay();
}

// Reset the calculator
function clearDisplay() {
    currentDisplay = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}