// Task 1: Temperature Checker
let temperature = prompt("Enter the temperature in Celsius: ");
if (temperature <= 0) {
    console.log("Water is frozen");
} else if (temperature >= 100) {
    console.log("Water is boiling");
} else {
    console.log("Water is in liquid state");
}

// Task 2: Simple Calculator
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let operator = prompt("Enter an operator (+, -, *, /): ");
switch (operator) {
    case '+':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case '-':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case '/':
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break; 
    default:
        console.log("Invalid operator");
}