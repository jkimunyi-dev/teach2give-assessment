// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the
// string, and then returns the result string.
// Examples:
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"

function capitalizeWords(input: string): string {
  const words: string[] = input.split(" "); // Split the input string into words
  const capitalizedWords: string[] = [];

  for (const word of words) {
    capitalizedWords.push(
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    );
  }

  return capitalizedWords.join(" ");
}

// Test cases
console.log(capitalizeWords("hi")); // Output: "Hi"
console.log(capitalizeWords("i love programming")); // Output: "I Love Programming"
