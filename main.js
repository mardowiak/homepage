const name= 'Marcin';
const surname= 'Wdowiak';
let age= 25;
console.log(`Hej, nazywam się ${name} ${surname} i mój wiek to ${age} lat`);
console.log('Auuuuuuuu');
const variable1= document.querySelector('.nauka-JS');
variable1.innerHTML='Halo dzień dobry, auuuuuuuuuu!'

function calculate(myNumber){
    console.log(`Moja liczba to: ${myNumber}`);
    return myNumber*7;
}
const a=calculate(8);
console.log(a);

function hello1(name, age){
    console.log(`Siema, mam na imię ${name} i mój wiek to ${age} lat`);
}
hello1('Marcin',25);

const hello2=(name,age)=>{
    console.log(`Siema, mam na imię ${name} i mój wiek to ${age} lat`);
}
hello2('Oskar', 34);