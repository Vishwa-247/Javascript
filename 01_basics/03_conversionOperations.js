let score = "Vishwa"

console.log(typeof score); //string
console.log(typeof(score)); //string


let valueInNumber = Number(score)

console.log(typeof(valueInNumber)); //number

console.log(valueInNumber); // NaN if valueInNumber = '33abc'  "33"=> 33
console.log(valueInNumber); // 0 if valueInNumber = null     "33abc" => NaN
console.log(valueInNumber); // NaN if valueInNumber = undefined
console.log(valueInNumber); // 1 if valueInNumber = true
console.log(valueInNumber); // NaN if valueInNumber = "Vishwa"



let isLoggedIn = "Vishwa"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); // 1 => True 0 => false
console.log(booleanIsLoggedIn);  //empty string "" = False
console.log(booleanIsLoggedIn);  // "Vishwa "   = True


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // String
