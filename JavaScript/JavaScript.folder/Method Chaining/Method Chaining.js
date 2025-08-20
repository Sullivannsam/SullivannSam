

//                         Methods Chaining



//              WIHTOUT CHAINING    


// let userName = window.prompt("Enter Your Username");

// userName = userName.trim();
// let firstName = userName.slice(0);
// firstName = firstName.toUpperCase()


// let lastChar = userName.slice(1);
// lastChar = lastChar.toLowerCase();
// userName = firstName + lastChar;

// console.log(userName);








//              WITH METHOD



userName = window.prompt("Enter Your Name");

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);    


































