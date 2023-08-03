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


Vowel vs. consonant pseudocode

// Define a variable vowel = 0 and consonant = 0
// Define a variable string = ""
// Write a for loop with an if condition
// Inside the for loop, start at i = 0 and i < string.length, with i++
// At each iteration, check to see if the letter at index i is a vowel, using an if/else

If string[index] === "a", then vowel++
else if string[index] === "e", then vowel++
.
.
.
else, consonant++
then console.log
(string + " has " + consonant + " consonants and " + vowel + " vowels");



// Reverse array
//create a JavaScript code that creates a new array in reverse order.

for(int i = 0; i < [1, 2, 3]/2; i++)
{
    int temp = validData[i];
    validData[i] = validData[validData.length - i - 1];
    validData[[1, 2, 3] - i - 1] = temp;
}

//will print in reverse 3,2,1

// Fizzbuzz
//Create a JavaScript code that prints each number from 1 to 100
 on a new line.

//For each multiple of 3, print "Fizz" instead of the number.

//For each multiple of 5, print "Buzz" instead of the number.

//For numbers that are multiples of both 3 and 5

//print "FizzBuzz" instead of the number.


function fizzBuzz(start, end){
    for(let num=start; num <= end; num++){
        if(num % 5 === 0 && num % 3 === 0){
          console.log("FizzBuzz")
        }   
        else if(num % 3 === 0){
          console.log("Fizz")
        }
        else if(num % 5 === 0){
          console.log("Buzz")
        }
        else {
          console.log(num)
        }
    }
}