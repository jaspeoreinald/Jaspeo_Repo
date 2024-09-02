// Task 1: Arithmetic Calculator
let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);

// Task 2: Age Validator
let age = parseInt(prompt("Enter your age: "));
let isAdult = age >= 18;
if (isAdult) {
    alert("You are an adult.");
} else {
    alert("You are not an adult.");
}