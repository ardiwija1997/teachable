// Create Arrays
const number = [60,1,68];
const number2 = new Array(90,434,2);
const fruit = ['Apple','Banana','Cherry'];
const mix = [30,'hello',true,undefined,null,{a:1,b:2}, new Date()];

// console.log(number);
// console.log(mix);

let val;

val = number.length; // Get Length

val = Array.isArray(number2); // Check is Array

val = fruit[4]; // Get Single Value

console.log(val);