/*Only odds pseudocode

Create an array named 'input'
Create an array for the results, named 'output'
Make a for loop that goes through each index starting at 0
for (let i = 0; i < input.length; i++)
Inside an if condition:
At each index, which is a number, check to see if it's even or odd
To check that, use the % (modulus) operator - (example: 2 % 2) if we get 0, it's even; if we get 1, it's odd
If it's odd, push the number to the 'output' array
Outside the loop, console.log the 'output' array

*/

const input = [2, 4, 6, 8, 10, 11, 12];
const output = [];

for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 1) {
        output.push(input[i]);
    }
}

console.log(output);


//Vowel vs. consonant pseudocode

// Define a variable vowel = 0 and consonant = 0
// Define a variable string = ""
// Write a for loop with an if condition
// Inside the for loop, start at i = 0 and i < string.length, with i++
// At each iteration, check to see if the letter at index i is a vowel, using an if/else

const word = "hello";
let consonants = 0;
let vowels = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === "a" || word[i] === "e" || word[i] === "i" || word[i] === "o" || word[i] === "u") {
        vowels++;
    } else {
        consonants++
    }
};

console.log(word + " has " + consonants + " consonants and " + vowels + " vowels")



// Reverse array
//create a JavaScript code that creates a new array in reverse order.
let array = [1,2,3]
let newarray =[]
for(let i = array.length-1; i >= 0; i--)
{
    newarray.push(array[i])
}

//will print in reverse 3,2,1

// Fizzbuzz
//Create a JavaScript code that prints each number from 1 to 100
 //on a new line.

//For each multiple of 3, print "Fizz" instead of the number.

//For each multiple of 5, print "Buzz" instead of the number.

//For numbers that are multiples of both 3 and 5

//print "FizzBuzz" instead of the number.


for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
  } else if (i % 5 === 0) {
      console.log("Buzz");
  } else if (i % 3 === 0) {
      console.log("Fizz");
  } else {
      console.log(i);
  }
}
