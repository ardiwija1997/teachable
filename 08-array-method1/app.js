// Create Arrays
const number = [60,1,68];
const number2 = new Array(90,434,2);
const fruit = ['Apple','Banana','Cherry'];
const mix = [30,'hello',true,undefined,null,{a:1,b:2}, new Date()];

let val;

fruit[2] = 'Grape'; // replace
val = mix.indexOf(undefined); // find
number.push(200); // add end
number.unshift(12) //add front
number.pop(); // delete 
number.shift(); //delete end 
number.splice(1,1); // delete change much or single

fruit.reverse(); // reverse (membalikan urutan)

console.log(number);
console.log(fruit);
console.log(val);