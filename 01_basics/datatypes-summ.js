// primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol - used for unique , BigInt -scentific values


//java sccript is dynmicaly typed 



const id = Symbol('123') // this is different 
const anotheId = Symbol('123')  // this is different 


console.log(id === anotheId) //false

// const bigNumber = 72634858764538276354n


//Reference (non-primitive)

// Array , Objects , Functions
//array
const heros = ["ironman" , "captain" , "hulk"];


//object
 let myObj = {
    name:"Vishwa",
    age:21,

}


//Function 

// const myFunction = function(){
//     console.log("Hello world");
    
// }



// console.log(typeof heros)




//+++++++++++++++++++++++++++++++++++++++++++++++++


//Stack (primitive) , Heap (Non-Primitive)


let myFunctions = "Vishwa"

let my = myFunctions
my = "teja"

console.log(myFunctions); //vishwa
console.log(my); //teja


let userOne = {
    email : "vishwa@gamil.com"
}

let userTwo = userOne;

 userTwo.email = "vishea"

console.log(userOne); // vishea
console.log(userTwo);  //vishea

