 // type data Object
const person = {
    firstName : 'steve',
    lastName : 'Job',
    age : 39,
    email:'ardi@job.com',
    hobbies : ['music','sports'],
    address:{
        city:'arizona',
        zipcode : '83233'
    },
    getBirthYear: function(){
        return 2018 - this.age;
    }
}
let val;

val = person;
val = person.firstName; // memanggil key
val = person['firstName']; // memanggil dgn [' ']
val = person.age;
val = person.hobbies[0];
val = person.address.zipcode;
val = person.address['city'];
val = person.getBirthYear();


console.log(val);
