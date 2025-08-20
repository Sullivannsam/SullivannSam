

//                      While loop
//      *while loop = repeat some code while some condition is true
//          the the value for true to escape the loop

// let userName = "";


// while(userName === "" || userName === null){
//     userName = window.prompt(`enter your username`);

// }
// console.log(`Hello, ${userName}`);

//  put sonme null to not escape from loop cancel*



let userName;
let passWord;
let logIn = false;

while(!logIn){
    userName = window.prompt(` enter your username`);
    passWord = window.prompt(` enter your password`);

    if(userName === "username" && passWord === "password"){
        logIn = true;
        console.log("you are login");

    }
    else{
        console.log("please try again");
    }

}









































