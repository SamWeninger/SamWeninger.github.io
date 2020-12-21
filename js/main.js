// alert("Yoooooooo");



// JS VARIABLES :
// VAR: globally scoped (avoid this kind), LET: can be re-assigned values, CONST: cannot be reassigned
// variable types: strings, numbers, boolean, null, undefined

// const name = "Sam"
// const age = 21



// CONCAT STRINGS
// console.log("My name is " + name + ", and I am " + age + " years old.")



// TEMPLATE STRINGS -> `` (back quotes)
// console.log(`My name is ${name}, and I am ${age} years old.`)

// console.log(name.split(''))



// ARRAYS: multi-variate (bool, strings, numbers can be in same array), no initialization needed
// CONST ARRAYS -> can append new values, CANNOT reassign values 

// const my_array = new Array(0,1,2,3,4)
// const my_array = ['zero', 'one', 'two']
// console.log(my_array)
// my_array.push('three')
// console.log(my_array)
// my_array.unshift('negative one')
// console.log(my_array)
// console.log(Array.isArray(my_array))

// console.log(my_array.indexOf('one'))




// OBJECT LITERALS

// const person = {
//     name: 'mom',
//     age: 51,
//     gender: "female",
//     hobbies: ["art", "music", "dancing"]

// }

// console.log(person.hobbies)

// const {name} = person
// console.log(name)

// const personJSON = JSON.stringify(person)
// console.log(personJSON)

todos = [
    {
        id: 0,
        todo: "clean room",
        completed: false
    },
    {
        id: 1,
        todo: "clean bathroom",
        completed: false
    },
    {
        id: 2,
        todo: "wash clothes",
        completed: false
    }
]





// FOR LOOPS

for(let i = 0; i < 3; i++) {
    console.log(todos[i]);
}