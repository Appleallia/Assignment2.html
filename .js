// This program will calculate the product of three integers.

// Step 2: Declare variables
let num1, num2, num3, result;

// Step 3: Declare variables to store prompt values
let num1Val, num2Val, num3Val;

// Step 4–6: Prompt the user for values
num1Val = prompt("Enter the first integer:");
num2Val = prompt("Enter the second integer:");
num3Val = prompt("Enter the third integer:");

// Step 7–9: Convert to integers
num1 = parseInt(num1Val);
num2 = parseInt(num2Val);
num3 = parseInt(num3Val);

// Step 10: Compute the product
result = num1 * num2 * num3;

// Step 11: Write the product to the webpage
document.write("The product is " + result);
