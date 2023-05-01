// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
    // Input: an object
    // Output: a string that states whether the object is divisible by three, or is not divisible by three
    // Process: create a function using % 3 === 0 operator to determine if a number is divisible by 3

// a) Create a test with expect statements for each of the variables provided.

describe("threeDivider", () => {
    it(" takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
    const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
    const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
    const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"
        expect(threeDivider(object1.number)).toEqual("15 is divisible by three")
        expect(threeDivider(object2.number)).toEqual("0 is divisible by three")
        expect(threeDivider(object3.number)).toEqual("-7 is not divisible by three")
        })
})

// test output: threeDivider
    // ✕  takes a object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)

    // ● threeDivider ›  takes a object as an argument and decides if the number inside it is evenly divisible by three or not
  
    //   ReferenceError: threeDivider is not defined

// b) Create the function that makes the test pass.

// Green:
// const threeDivider = (object) => {
//     if(object % 3 === 0)
//     return `${object} is divisible by three`
//     else 
//     return `${object} is not divisible by three`
// }

// Refactor:
const threeDivider = (object) => {
    return object % 3 === 0 ? `${object} is divisible by three` : `${object} is not divisible by three`
}

// output: ./code-challenges.test.js
//   threeDivider
//   ✓  takes a object as an argument and decides if the number inside it is evenly divisible by three or not (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
    // Input: an array of words
    // Output: an array with all the words capitalized
    // Process: create a function using the .map higher order function and .toUpperCase method to output all the given words capitalized

// a) Create a test with expect statements for each of the variables provided.

describe("upperCaser", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(upperCaser(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(upperCaser(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// test output: threeDivider
    // ✓  takes a object as an argument and decides if the number inside it is evenly divisible by three or not (2 ms)
    // upperCaser
    //   ✕ takes in an array of words and returns an array with all the words capitalized
  
    // ● upperCaser › takes in an array of words and returns an array with all the words capitalized
  
    //   ReferenceError: upperCaser is not defined

// b) Create the function that makes the test pass.


// Green: 
// const upperCaser = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         newArray.push(array[i].charAt(0).toUpperCase() + array[i].slice(1))
//     }
//     return newArray
// }

// Refactor:
const upperCaser = (array) => {
    return array.map(value => value[0].toUpperCase() + value.substring(1))
}

// Notes: My original function was actually the .map refactor. It was very intuitive. I had to search for help, for the 'for loop' version of the function. The built in methods got confusing compared to the .map function. 

// // output: PASS  ./code-challenges.test.js
//   threeDivider
//   ✓  takes a object as an argument and decides if the number inside it is evenly divisible by three or not (3 ms)
// upperCaser
//   ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code: 
    // Input: a string
    // Output: the index number of the first vowel in the input string
    // Process: create a function that uses a for loop to iterate through a string and checks whether the string contains any vowels from the variable vowels = ["a", "e", "i", "o", "u"]

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// test output: FAIL  ./code-challenges.test.js
//   threeDivider
//   ✓  takes a object as an argument and decides if the number inside it is evenly divisible by three or not (2 ms)
// upperCaser
//   ✓ takes in an array of words and returns an array with all the words capitalized (1 ms)
// firstVowel
//   ✕ takes in a string and logs the index of the first vowel (1 ms)

// ● firstVowel › takes in a string and logs the index of the first vowel

//   ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

const vowels = ["a", "e", "i", "o", "u"]

const firstVowel = (string) => {
   for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            return i;
        }
   }}
//  return vowels.includes(string[i]) ? i : "There is no vowel in this string" 

// output:  PASS  ./code-challenges.test.js
//   threeDivider
//   ✓  takes a object as an argument and decides if the number inside it is evenly divisible by three or not (2 ms)
// upperCaser
//   ✓ takes in an array of words and returns an array with all the words capitalized
// firstVowel
//   ✓ takes in a string and logs the index of the first vowel

// notes: I tried and tried to figure out a way to use a ternary operator for this function, but I cannot find a way to make it work. After doing a bit of research, it seems it wont work because the return is still inside the for loop, so I tried making the ternary into a variable, and calling it after the for loop, but still with no success. It possibly has something to do with the 'else' part of the ternary being attached?