//? Q1 : Write a program that checks if a number entered by the user is prime.

function isPrime(number){

  // A prime number is greater than 1 and has no divisors other than 1 and itself

  if(number <= 1){
    return false; // Numbers less than or equal to 1 are not prime
  }
  // Loop through numbers from 2 to the square root of the number

  for(let i =2; i<= Math.sqrt(number); i++){
    // If the number is divisible by any of these numbers, it's not prime
    if (number % i === 0) {
      return false;
  }
  }
return true; // If no divisors are found, the number is prime
}

//? Q2 : Write a function that finds the largest and smallest numbers 
//? in an array (no array, just numbers).

// Ask the user for input numbers, separated by spaces
const input = prompt("Enter numbers separated by spaces:");

// Split the input string into an array of strings and convert them to numbers using Number()
const numbers = input.split(" ").map(Number);

let largest = numbers[0];
let smallest = numbers[0];

// Loop through the numbers to find the largest and smallest
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

// Output the results
console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

//? Q3 : Write a function that checks 
//? if a word entered by the user is a palindrome.

//? Q4 : Write a number guessing game where the program randomly selects a number between 1 and 50, 
//? and the user continues until they guess correctly.


//? Q5 : Write a function that calculates the factorial of a number entered by the user.


//? Q6 :  Write a program that calculates the sum and average of numbers from 1 to N.

//? Q7 :  Write a function that calculates the sum and average of all elements in an array (no array, just numbers).



//? Q8 :  Write a program that counts the number of vowels in a text entered by the user.

//? Q9 : Write a program that prints the Fibonacci sequence up to a certain number.

//? Q10 : Write a program that finds and counts each vowel in a word entered by the user.