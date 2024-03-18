// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.

function countVowels(sentence: string): number {
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let vowelCount: number = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
}

// Test case
console.log(countVowels("Hello World")); // Output: 3
