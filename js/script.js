'use script';

let foreName = 'Fedor';        //Переменная литерал строка
console.log(foreName);
//Задача 3
function square(n) {
    return Math.pow(n, 2);
}
console.log(square(2));  //квадрат аргумента

function cube(a) {
    return Math.pow(a, 3);
}
console.log(cube(2));   //куб аргумента


//Задача 4
const fn = null; {
    console.log(`Name, ${null.name}`);
};
const Fedor = {name: 'Fedor Pyatakov'};
let Oleg = {name: 'Oleg Nikiforov'};

const dateBirth = 1989;        //Константа литерал число
console.log(dateBirth);
fn(Fedor);
fn(Oleg);


function showMessage(name)  {   //Функция вывода имени
    alert(name); 
function createUser(name, city) {
    return createUser(name, city);
}
showMessage('Фёдор');console.log("'name: 'Marcus Aurelius', city: 'Roma'"); 