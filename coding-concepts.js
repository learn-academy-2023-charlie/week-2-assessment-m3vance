// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// a) Your answer: ["C", "h", "a", "r", "l", "i", "e", " ", "2", "0", "2", "3"]
// b) Verify and explain: 
// Output: 
  // ['C', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '3']
    // I got the expected output, except for single quotes instead of double quotes. 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Tricky tricky! There's no return, so it will log Function("LEARN Student"), or something like that.
// b) Verify and explain: 
// Output: undefined
  // I recall that calling on a data type, without returning it, will log the type of data it is. I got mixed up. I understand now why it logs undefined. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain:
// Output: [ 8, 10, 12, 14, 16 ]
  // The .map higher order function only works on arrays, or variables representing arrays, so works as intended. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: If the value in the array is divided by 2 with 0 remainder, it will be an even number, so this will log only evens.
// b) Verify and explain:
// Output: [ 11, 13, 15 ]
  // I RUSHED MY ANSWER AND DIDN'T NOTICE THE '!' sadface

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain:
// Output: JavaScript
  // Using '.' to reference specific keys within the object. Works as intended.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: 
// student: George
// cohort: "Charlie"
// year: 2023

// b) Verify and explain:
// Output: Learn { student: 'George', cohort: 'Charlie', year: 2023 }
// I couldn't remember the exact output, but the idea is that we use the constructor method within a class to make the objects in the class dynamic. In this example, student = name is dynamic, while cohort will always be Charlie and year will always be 2023.

