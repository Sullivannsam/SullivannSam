/*

const decreasebtn = document.getElementById("decreasebtn")
const resetbtn = document.getElementById("resetbtn")
const increasebtn = document.getElementById("increasebtn")
const countlabe = document.getElementById("countlabel")

let count = 0;
increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreasebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetbtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
*/

/*let x = 3;
let y = 2;
let z= 1;

//z = Math.round(x);
//z = Math.pow(x,y);
let max = Math.max(x,y,z);

console.log(max);
*/
/*
let time = 19;

if(time < 12){
    console.log("good morning");
}
else{
    console.log("good afternone");

}
*/

/*
let age = 19;
if(age >= 18){
    console.log("you are old enough to watch this site");
}
else{
    console.log("you are not old engouh to enter this site");
}
*/

/*
let time = 13;
if (time > 12){
    console.log("your time is ready to eat lunch");
}
else{
    console.log("the time is not for lunch yet!");
}
*/

/*
let opencafe = 6 ;
if (opencafe < 7){
    console.log("The cafe shop is not open yet!");
}
else{
    console.log("The cafe shop open now ");
}
*/

/*
let student = true;
if(student){
    console.log("you are student");
}
else{
    console.log("you are not a student");
}

let age = 19;
let license = false;

if(age >= 18){
    console.log("you are  old engouh to get a license");
     
    if(license){
        console.log("you have license");
    }
    else{
        console.log("you dont have a license!");
    }
}
else{
    console.log("you are not old engouh to get the license!")
}

let agee = -1;
if(agee >=18){
    console.log("you old engouh to get this website");
}
else if(agee < 0){
    console.log("your age must be 18+ to enter this website");
}
else{
    console.log("you are not old engouh to get this website")
}

*/
/*
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const output = document.getElementById("output");
let age;

submit.onclick = function(){
    
    age = output.value;
    age = Number(age);
    
    if(age >= 18){
        output.textContent = `your age is old enough to enter this website`;
    }
    else{
        output.textContent = `your age dose not old enough to enter this website`;
    }
}
*/

/*
const input = document.getElementById("input");
const submit = document.getElementById("submit"); 
const output = document.getElementById("output");

submit.onclick = function(){
    age = input.value;
    age = Number(age);

    if(age >= 18){
        output.textContent = `you are old to get this website`;
    }
    else{
        output.textContent = `you are not old enough to enter this website`;
    }
}

*/
/*
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const output = document.getElementById("output");

    submit.onclick = function(){
        age = input.value;
        age = Number(age);
        
        if(age >= 18){
            output.textContent = `You can enter this website`;

        }
        else{
            output.textContent = `you can not enter this website, beacuse you are not old enough`;
        }
    }
*/


/* statemnet of "checked" */

const mycheckbox = document.getElementById("mycheckbox");
const visabtn = document.getElementById("visabtn");  
const masterbtn = document.getElementById("masterbtn");  
const paypalbtn = document.getElementById("paypalbtn");  
const mysubmit = document.getElementById("mysubmit");  
const subresult = document.getElementById("subresult");  
const paymentresult = document.getElementById("paymentresult");  

mysubmit.onclick = function(){
    
    if(mycheckbox.checked){
        subresult.textContent = `You has been subcribe to our channel`;
    }
    else{
        subresult.textContent = `You are not subcribe to our channel`;

    }

    if(visabtn.checked){
        paymentresult.textContent = `you have been pay with visa`;
    }
    else if(masterbtn.checked){
        paymentresult.textContent = `you have pay with masterCard`;
    }
    else if(paypalbtn.checked){
        paymentresult.textContent = `you have been pay with paypal`;
    }
    else{
        paymentresult.textContent = `you must be add your paypal`;
    }
}


 /*
let age = 15;
let message = age >= 18 ? "you are a adult" : "you are minor";
console.log(message);
*/




/* ternary operator

let time = 13;
let greeting = time < 12 ? "Good morning!" : "Good night";
console.log(greeting);

let purchaseAmount = 300;
let discount = purchaseAmount >= 100 ? 10 : 0 ;
console.log(`your total is $${purchaseAmount - purchaseAmount *(discount/100)}`);
 */


/*
let day = 8;

switch(day){
    case 1:
        console.log("it is a monday");
        break;
    case 2:
        console.log("it is a Tuesday");
        break;
    case 3:
        console.log("it is a Wednesday");
        break;
    case 4:
        console.log("it is a Thursday");
        break;
    case 5:
        console.log("it is a Friday");
        break;
    case 6:
        console.log("it is a Saturday");
        break;
    case 7:
        console.log("it is a Sunday");
        break;
    default:
        console.log(`${day} this is not a day`);
}
*/

// with break it will not execute the next code//
// without break it will execute tha all code //


/*
let testscore = 50 ;
let grade;

switch(true){
    case testscore >= 90:
        grade = "A";
        break;
    case testscore >= 70:
        grade = "B";
        break;
    case testscore >= 60:
        grade = "C";
        break;
    case testscore >= 50:
        grade = "D";
        break;
    default:
        grade = "F";

}
console.log(`your grade is ${grade}`);
*/
/*
const fullname = "Sullivann Sam";

let firstname = fullname.slice(0,1);
let lastname = fullname.slice(4,1);

console.log(firstname);
console.log(lastname);
*/

 //let username = window.prompt("enter your username");

/*
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChar = username.slice(1);
extraChar = extraChar.toLowerCase();
username = letter + extraChar;

console.log(username);
*/













