// Question 5: Reverse Integer
// Write a program that takes an integer as input and returns an integer with reversed digit
// ordering.
// Examples:
// For input 500, the program should return 5.
// For input -56, the program should return -65.
// For input -90, the program should return -9.
// For input 91, the program should return 19.

function reverseInteger(num: number): number {
  const reversed: number = parseInt(
    num.toString().split("").reverse().join("")
  );
  return num < 0 ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(500)); // Output: 5
console.log(reverseInteger(-56)); // Output: -65
console.log(reverseInteger(-90)); // Output: -9
console.log(reverseInteger(91)); // Output: 19
