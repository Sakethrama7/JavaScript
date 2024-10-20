//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // Even though you give same values in Symbol they are not equal.

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// typeof non-primitive data types give Object.

// https://262.ecma-international.org/5.1/#sec-11.4.3



/*
   JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
*/


// Two types of memory
// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName= "Sakethramadotcom"
let anothername=myYoutubeName

anothername="grootdotcom"

console.log(myYoutubeName);
console.log(anothername);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email="Saketh@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);