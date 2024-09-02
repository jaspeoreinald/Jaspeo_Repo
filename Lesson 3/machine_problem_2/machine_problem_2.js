// Part 1: Variables and Data Types
// Task 1: Declare Variables
let userName = "juandelacruz";
let userAge = 21;
let isLoggedIn = true;
let userScores = [14, 28, 42, 56, 70];
let userProfile = {
    name: "Juan",
    age: 21,
    isActive: false
};
// Task 2: Output Values
console.log(userName);
console.log(userAge);
console.log(isLoggedIn);
console.log(userScores);
console.log(userProfile);

// Part 2: Operations
// Task 1: Arithmetic Operations
let num1 = 12;
let num2 = 3;
console.log(`Addition: ${num1 + num2}`);
console.log(`Subtraction: ${num1 - num2}`);
console.log(`Multiplication: ${num1 * num2}`);
console.log(`Division: ${num1 / num2}`);

// Task 2: String Concatenation
let firstName = "Juan";
let lastName = "Dela Cruz";
let fullName = firstName + " " + lastName;
console.log(`${fullName}`);

// Part 3: Type Checking
// Task 1: Check and Print Data Types
console.log(typeof userName);
console.log(typeof userAge);
console.log(typeof isLoggedIn);
console.log(typeof userScores);
console.log(typeof userProfile);
console.log(typeof num1);
console.log(typeof num2);
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof fullName);

// Part 4: Extra Challenge
// Task 1: Object Property Access
console.log(userProfile.name);
console.log(userProfile.age);
console.log(userProfile.isActive);