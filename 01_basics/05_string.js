const name = "vishwa" // intialiizinng of string type 1
const repo = 50

// console.log(name + repo + " value"); // vishwa50 value
// console.log(`Hello My name is ${name} and my repos is ${repo}`) ;//Backticks


const gameName = new String('Vishwa-teja-thouti') // initializing the string type 2 

// console.log(gameName[0]); //V
// console.log(gameName.__proto__);


// console.log(gameName.length); //6
// console.log(gameName.toLocaleUpperCase()); //VISHWA

// console.log(gameName.charAt(2)); // position at 2 => S
// console.log(gameName.indexOf('V')); // 0


const newString = gameName.substring(0,4)
// console.log(newString); //Vish


const anotherString = gameName.slice(-8,4)
// console.log(anotherString); // h 

const newString1 = "  Vishwa   "
// console.log(newString1);//    vishwa
// console.log(newString1.trim());//vishwa


const url = "https://vsihwateja.com/vishwa%20teja"
// console.log (url.replace('%20',"-")) // https://vsihwateja.com/vishwa-teja


// console.log(url.includes('vishwa')) //true

// console.log(gameName.split('-')); //[ 'Vishwa', 'teja', 'thouti' ]

 


