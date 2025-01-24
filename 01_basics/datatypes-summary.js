// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId = Symbol('123')


console.log(id === anotherId);

const bigNumber = 354632645653434n



// Refrence  (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "lalit",
    age: 23,

}

const myFuction = function(){
    console.log("Hello word");
}

console.log(typeof myFuction);


//****************************** memory **********************************

// Stack (Primitive),  Heap (Non-Primitive)

let myYoutubeName = "Lalit"
let anotherName = myYoutubeName
anotherName = "chaiaurcode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "lalit@google.com"


console.log(userOne.email);
console.log(userTwo.email);

