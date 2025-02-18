let score = "Vishwa"

// console.log(typeof score); //string
// console.log(typeof(score)); //string


let valueInNumber = Number(score)

console.log(typeof(valueInNumber)); //number

// console.log(valueInNumber); // NaN if valueInNumber = '33abc'  "33"=> 33
// console.log(valueInNumber); // 0 if valueInNumber = null     "33abc" => NaN
// console.log(valueInNumber); // NaN if valueInNumber = undefined
// console.log(valueInNumber); // 1 if valueInNumber = true
// console.log(valueInNumber); // NaN if valueInNumber = "Vishwa"



let isLoggedIn = "Vishwa"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // 1 => True 0 => false
// console.log(booleanIsLoggedIn);  //empty string "" = False
// console.log(booleanIsLoggedIn);  // "Vishwa "   = True


let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); // 33
// console.log(typeof stringNumber); // String


// ********************* Operations ***************************************


let value = 3
let negValue = -value
// console.log(negValue); // -3
// console.log(typeof negValue); //number

let str1 = "hello"
let str2 = " Vishwa"


let str3 = str1 + str2 
// console.log(str3); //hello Vishwa


console.log('1' + 2); //12
console.log(1 + '2'); //12


console.log(+true); // 1
// console.log(true+); //error
console.log(+""); //0

let num1 ,num2 ,num3

num1 = num2 = num3 =2+2 


let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101

