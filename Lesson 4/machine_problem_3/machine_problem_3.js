// Task 1: User Input
let P = parseFloat(prompt("Enter principal amount: "));
let R = parseFloat(prompt("Enter annual interest rate: "));
let T = parseFloat(prompt("Enter time period (in years): "));
// Task 2: Calculate Simple Interest
let simpleInterest = (P * R * T) / 100;
// Task 3: Calculate the Total Amount
let totalAmount = P + simpleInterest;
// Task 4: Display the Results
console.log(`Simple Interest: ${simpleInterest}`);
console.log(`Total Amount: ${totalAmount}`);