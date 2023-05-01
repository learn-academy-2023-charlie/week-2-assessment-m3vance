# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: A parameter is variable that's used in a function. An argument is the same thing, except its used when you are calling on the parameter. 

Researched answer: Parameters are like placeholders in a function. The arguments are the actual data that replaces the parameters in a function when it is being called on.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map requires index. The order is always index, value, array and must be in order, even when the prior ones aren't being used. value and array are optional.

Researched answer: .map can also be used to reformat objects in an array.

3. What is the difference between map and filter?

Your answer: .map will output the exact same number of objects in the array, while .filter will only output a subset of the array based on what parameters are passed.

Researched answer: .filter will filter through each element in the array and return a filtered array. Map will output a new array, with the same number of elements as the original array. There is also forEach and reduce. forEach does the same thing as filter, except forEach will execute the function on each element, while filter will remove the element if the return value is false. Reduce will reduce the entire array to a single value.

1. What is iteration?

Your answer: Iteration is the process of calling on each element of an array. Using a for loop, we can tell the for loop what index value to start at, where to end at, and the rate of the value it increases each time the for loop is executed.

example: for (let i = 0; array.length; i++)

The first part is index where the for loop will first execute. The second part is telling it where to stop. In this case, it will execute until it reaches the end of the array. The last part is shorthand for telling it to increase the value by 1 each time it executes, essentially going through each element, one by one.

Researched answer: There are a few other iteration methods, like do.. while. do and while used together will execute a function on each element until it returns false.

1. What is the difference between a function and a method?

Your answer: a function is a dynamic piece of code that can be written with parameters that are interchangeable. Functions are especially useful when we want to use a certain process multiple times with different arguments. They save space and make it easy for coders to repeat processes without writing seperate codes. Methods are prewritten functions that are attached to a .method. Some very nice people decided to write code for all of us and attach them to simple names, such as .toUpperCase, etc etc.

Researched answer: A function is seperate from any method or object. Methods are associated with objects and are used only in conjunction with objects. A function can be seen as the skeleton of instructions, while the methods are instructions that are used on objects within the function.

6. STRETCH: What is hoisting in JavaScript?

Your answer: Hoisting is calling on functions that are written outside of the coding file.

Researched answer: I was totally wrong haha. Hoisting has to do with the scope. If a let or const variable is declared after the function, the function will not run. Using var however, will let it run, since var is read on the global scope. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component: Components are code snippets that are prewritten for us to use easily. They serve the same purpose as functions, but instead return HTML.

2. Spread operator: The '...' spread operator can be used to combine arrays, or copy arrays to be used in a new variable. For example: 

const array1 = ["Thank",  "you", "for"]
const array2 = [...array1, "grading", "this!"]

console.log(array2)

output: [ 'Thank', 'you', 'for', 'grading', 'this!' ]

3. React state: React states are built in objects used to hold data that can change.

4. React props: React props are the arguments passed in to react components. They are written using HTML attributes.

5. DOM events: Document object model events are instructions for running a certain code when an event happens, such as clicking an image or button and a visual effect happening, or mousing over a certain part of the site and more info pops up.
