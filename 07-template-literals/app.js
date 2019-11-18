const name = 'hakim';
const age = 23;
const job = 'web developer';
const city = 'cirebon';

let html;
// without template string(es5)

// html = '<ul>' +
//         '<li> name : ' + name +'</li>' +
//         '<li> age : ' + age +'</li>' +
//         '<li> job : ' + job +'</li>' +
//         '<li> city : ' + city +'</li>' +
//        '</ul>';

function hello(){
    return 'hello';
}
 
// with templating string (es6)
html = `<ul>
        <li>name : ${name}</li>
        <li>age : ${age}</li>
        <li>job : ${job}</li>
        <li>city : ${city}</li>
        <li>${5+2}</li>
        <li>${hello()}</li> // memnggil dri fungsi
        <li>${age > 20 ? 'Over 20': 'Under 20'}</li> // pengkondisian
        
         </ul>`;


    document.body.innerHTML = html;