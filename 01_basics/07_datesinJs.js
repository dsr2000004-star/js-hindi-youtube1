// Date 

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
console.log(typeof myDate);

let myCratedDate = new Date(2025, 0, 6)
console.log(myCratedDate.toDateString())
console.log(myCratedDate.toLocaleString());

let myCreatedDate1 = new Date("09-6-2025")
console.log(myCreatedDate1);
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCratedDate.getTime());

console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);


// console.log(`Today is ${newDate.toDateString()} and now time is ${newDate.getTime()} `);


console.log(newDate.toLocaleString('default', { 
    weekday: "long", 
    year: "2-digit",
    month: "long", 
}

))



let a = new Date()
console.log(a.toDateString());
console.log(a.getDate());
console.log(a.getFullYear());
console.log(a.getTime());
console.log(a.getMonth() + 1);
console.log(a.getDay());


















