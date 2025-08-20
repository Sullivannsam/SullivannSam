//                            String Slicing 



//              Slicing() is a syntax that start name or an end name you want to start*

//                 Slicing had (Start, End)









// const  fullName = "Sullivann Sam";

// let firstName = fullName.slice(0,9);
// let lastName = fullName.slice(10,13);


// console.log(firstName);
// console.log(lastName);

//               if you use (minus -) it it will increase from the end of your name

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") +1);

// console.log(firstName);
// console.log(lastName);


const email = "SullivannSam@gamil.com";

let userName = email.slice(email.indexOf("@"));
let userInput = email.slice(0, email.indexOf("@"))


console.log(userInput);
console.log(userName);














