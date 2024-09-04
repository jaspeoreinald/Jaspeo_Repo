let startNumber = parseInt(prompt("Enter starting number: "));
let endNumber = parseInt(prompt("Enter ending number: "));
let stepValue = parseInt(prompt("Enter step value: "));

if (stepValue > 0) {
    for (let i = startNumber; i <= endNumber; i = i + stepValue) {
        console.log(i);
    }
} else if (stepValue < 0) {
    for (let i = startNumber; i >= endNumber; i = i + stepValue) {
        console.log(i);
    }
} else {
    alert("Step value must be a non-zero integer.");
}