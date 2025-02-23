//array

const myArr = [0,1,2,3,4,true]
const myHeros = ["iron man " , "hulk" ]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[2]);


//array methods
// myArr.push(6) //add 6
// myArr.push(7)  //add 7 
// myArr.pop() //removes 7

// myArr.unshift(9) // added at start 9
myArr.shift() // removes start thinng => [ 1, 2, 3, 4, true ]


// console.log(myArr.includes(true)); //true
// console.log(myArr.indexOf(true)); //4


const newArr = myArr.join()  //converts into string

// console.log( newArr);// 1,2,3,4,true => string
// console.log(myArr); //[ 1, 2, 3, 4, true ]



//slice and splice 

console.log("A", myArr); //A [ 1, 2, 3, 4, true ]

const  myn1 = myArr.slice(1,3) //does not maniputlates the original array 

console.log(myn1); //[ 2, 3 ]
console.log("B", myArr); //B [ 1, 2, 3, 4, true ]




const  myn2 = myArr.splice(1,3)// it manipulate sthe original array 
console.log("C", myArr); //C [ 1, true ]
console.log(myn2); //[ 2, 3, 4 ]
