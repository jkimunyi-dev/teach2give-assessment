// Question 2 : Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.

function generateFibonacci(limit: number): number[] {
  let fibonacciSequence: number[] = [0, 1]; // Starting Fibonacci sequence

  while (
    fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2] <=
    limit
  ) {
    const nextFibonacci =
      fibonacciSequence[fibonacciSequence.length - 1] +
      fibonacciSequence[fibonacciSequence.length - 2];
    fibonacciSequence.push(nextFibonacci);
  }

  return fibonacciSequence;
}

// Generate Fibonacci sequence up to 100
const fibonacciSequence: number[] = generateFibonacci(100);

// Print the generated Fibonacci sequence
console.log("Fibonacci sequence up to 100:");
console.log(fibonacciSequence);
