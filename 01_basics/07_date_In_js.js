// Dates

let MyDates = new Date()
// console.log(MyDates) //2025-02-22T13:26:16.006Z
// console.log(MyDates.toString()); // Sat Feb 22 2025 13:26:53 GMT+0000 (Coordinated Universal Time)

// console.log(MyDates.toDateString()); //Sat Feb 22 2025
// console.log(MyDates.toLocaleString()); //2/22/2025, 1:28:13 PM
// console.log(typeof MyDates); //object 

let myCreatedDate = new Date(2023, 0 ,23) 

// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023


let myCreatedDate1 = new Date(2023, 0 ,23 , 5 , 3) 
// console.log(myCreatedDate1.toLocaleString()); // 1/23/2023, 5:03:00 AM


let myTimeStamp = Date.now()
// console.log(myTimeStamp); //1740231267288    
// console.log(myCreatedDate1.getTime()); //1674450180000


let newDate = new Date()
// console.log(newDate); //2025-02-22T13:37:28.618Z
// console.log(newDate.getMonth() + 1 ); //2
// console.log(newDate.getDay()); //6

// console.log(`this is the month of feb ${newDate.getMonth() + 1} and the day was ${newDate.getDay()}`);



console.log
(newDate.toLocaleString('default' , {
    weekday : "long",
})); //Saturday
