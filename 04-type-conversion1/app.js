let val;
val = Number('51.30'); // String to Number

val = Number(true); // mengubah nilai boolean nilainya menjadi 1

// yang akan bernilai NAN
// val = Number('hello'); // string 
// val = Number(['1,2,3']); // array

// val = parseInt('100.31'); // akan membulatkan nilai

console.log(val);
console.log(typeof val);// maka akan melihatkan nama type data
console.log(val.toFixed(2));// akan menghilangkan desimal
