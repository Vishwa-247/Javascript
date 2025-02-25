const marvel_heroes = ['hulk' , 'IronMAn' , 'Spiderman']
const dc = ['flash', 'superman','btman']

marvel_heroes.push(dc)


// console.log(marvel_heroes); // [ 'hulk', 'IronMAn', 'Spiderman', [ 'flash', 'superman', 'btman' ] ]
// console.log(marvel_heroes[3][1]); //superman


// marvel_heroes.concat(dc)
// console.log(marvel_heroes); //[ 'hulk', 'IronMAn', 'Spiderman', [ 'flash', 'superman', 'btman' ] ]


const all_heros = marvel_heroes.concat(dc)
// console.log(all_heros);  // [
                    //     'hulk',
                    //     'IronMAn',
                    //     'Spiderman',
                    //     [ 'flash', 'superman', 'btman' ],
                    //     'flash',
                    //     'superman',
                    //     'btman'
                    //   ]


const all_new_heros = [...marvel_heroes,...dc]
// console.log(all_new_heros);


const another_array = [1,2,3,4,5,[6,7,8],[9,1,[2,3]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
// //[
//     1, 2, 3, 4, 5,
//     6, 7, 8, 9, 1,
//     2, 3
//   ]


console.log(Array.isArray('vishwa'))  //false

console.log(Array.from('vishwa'))  //[ 'v', 'i', 's', 'h', 'w', 'a' ]

console.log(Array.from({name: "vishwa"})); /// interstinng []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

