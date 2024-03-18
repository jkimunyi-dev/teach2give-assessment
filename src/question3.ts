// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples:
// 8=> returns true
// 6=> returns false

function isPowerOfTwo(num: number): boolean {
  if (num <= 0) {
    return false; // Numbers less than or equal to zero cannot be powers of two
  }

  return (num & (num - 1)) === 0;
}

// Test cases
console.log(isPowerOfTwo(8)); // Output: true
console.log(isPowerOfTwo(6)); // Output: false
