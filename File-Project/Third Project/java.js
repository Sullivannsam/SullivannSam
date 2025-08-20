//varribal
/*
let name = "hong";
let age = 19;
let hobby = "coding";
let national = "khmer"
let school = "NTTI";
let student = "IT";


document.getElementById("name").textContent = `My name is ${name}`;
document.getElementById("age").textContent = `my age are ${age}`;
document.getElementById("hobby").textContent = `my hobby is ${hobby}`;
document.getElementById("student").textContent = `i am a student of ${student}`;
document.getElementById("school").textContent = `i am study at ${school}`;
document.getElementById("national").textContent = `my national is ${national}`;


let students = 45;

*/

/*arithmetic operation***********


//students = students + 1; plus
//students = students - 1; dork
//students = students / 2; jek
//students = students * 2; kun
//students = students ** 2; svai kun
//students = students % 2; remainder somnol

// short cut: students -= 2;

//console.log(`my class has ${students} student`);

//let result = 2 * 2 **3 + 4 / 3 - 5;
//console.log(`the result of number is ${result}`);

*/

/* accept user input

let username;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("enter").value;
    console.log(username);
    document.getElementById("greeting").textContent = `Hello username ${username}`
}

*/


/*
    type convertsion basic

    let age = window.prompt("how are you");
age = Number(age);
age +=1;
console.log(age);

let x = "0";
let y = "0";
let z = "0";

x = Number (x);
y = String (y);
z = Boolean (z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

*/

/*
    conts lesson********

const PI = 3.14;

let radius;
let circumference;

document.getElementById('submit').onclick = function(){
    radius = document.getElementById("box").value;
    radius = Number(radius);
    
    circumference = 2 * PI * radius;

    document.getElementById("result").textContent = circumference + "cm";


}

*/


const number = document.getElementById("number");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");

let count = 0;

decrease.onclick = function(){
    count--;
    number.textContent = count;
}

reset.onclick = function (){
    count = 0;
    number.textContent = count;
}

increase.onclick = function(){
    count++;
    number.textContent = count;
}

















