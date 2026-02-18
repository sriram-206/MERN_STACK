// ===============================
// Basic JavaScript Assessment
// ===============================

// -------- Section 1: Variables & Assignment --------
console.log("=== Section 1: Variables & Assignment ===");

let name = "Alice";
let age = 22;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Swap without third variable
let a = 5, b = 10;
a = a + b;
b = a - b;
a = a - b;
console.log("Swapped a & b:", a, b);

// x and y example
let x = 10;
let y = x;
y = 20;
console.log("x after y change:", x); // 10

// Using const
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area of circle:", area);


// -------- Section 2: Operators --------
console.log("\n=== Section 2: Operators ===");

let num1 = 15, num2 = 4;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// Type coercion
console.log('5 + "5":', 5 + "5");
console.log('5 - "2":', 5 - "2");
console.log("true + 1:", true + 1);

// Number comparison
let number = 120;
if (number > 100) console.log("Greater than 100");
else if (number === 100) console.log("Equal to 100");
else console.log("Less than 100");

// == vs ===
console.log("5 == '5':", 5 == "5");
console.log("5 === '5':", 5 === "5");

// Logical operators
let userAge = 25;
console.log("Age Eligibility:", (userAge >= 18 && userAge <= 60) ? "Eligible" : "Not eligible");


// -------- Section 3: Control Statements --------
console.log("\n=== Section 3: Control Statements ===");

// Even or Odd
let num = 7;
console.log("Number", num, "is", (num % 2 === 0 ? "Even" : "Odd"));

// FizzBuzz
if (num % 3 === 0 && num % 5 === 0) console.log("FizzBuzz");
else if (num % 3 === 0) console.log("Fizz");
else if (num % 5 === 0) console.log("Buzz");
else console.log(num);

// Switch weekday
let day = 3;
switch(day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}

// For loop 1–20 and even numbers
console.log("Numbers 1–20:");
for (let i = 1; i <= 20; i++) {
    console.log(i, (i % 2 === 0 ? "(Even)" : ""));
}

// While loop sum 1–N
let N = 10, sum = 0, i = 1;
while (i <= N) {
    sum += i;
    i++;
}
console.log("Sum 1 to", N, "=", sum);

// Break and continue
console.log("Break & Continue example:");
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // skip 5
    if (i === 8) break;    // stop at 8
    console.log(i);
}


// -------- Section 4: Functions --------
console.log("\n=== Section 4: Functions ===");

// Sum function
function add(x, y) { return x + y; }
console.log("add(3,7):", add(3,7));

// Arrow function
const addArrow = (x, y) => x + y;
console.log("addArrow(4,6):", addArrow(4,6));

// Prime check
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("isPrime(7):", isPrime(7));

// Reverse string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse 'hello':", reverseString("hello"));

// Function with return but code after return
function test() {
    return;
    console.log("Hello"); // never executes
}
console.log("test() output:", test());

// Largest number in array
function largestNumber(arr) {
    return Math.max(...arr);
}
console.log("Largest in [5,12,7,1]:", largestNumber([5,12,7,1]));


// -------- Section 5: Integrated Challenge --------
console.log("\n=== Section 5: Integrated Challenge ===");

function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 75) return "B";
    else if (marks >= 50) return "C";
    else return "Fail";
}

const studentMarks = [95, 82, 67, 45];
studentMarks.forEach((marks, index) => {
    const grade = calculateGrade(marks);
    console.log(`Student ${index+1} Marks: ${marks} Grade: ${grade}`);
});

