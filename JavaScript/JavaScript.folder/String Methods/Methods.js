
//                          String Methods


// let userName = "SullivannSam";

//      ;.charAt()
// console.log(userName.charAt(0)); output = S of SullivannSam

//      .lastIndexOf()
// console.log(userName.lastIndexOf("S")) output = 9 of SullivannSam

//      .index()
// console.log(userName.indexOf("S")) output = 0 of SulliavnnSam


//      .length() count the all charater and convert to number*
// console.log(userName.length); output = 12 all of name SullivannSam


//      .trim() no wipe space*

// userName = userName.trim()
// console.log(userName); output = no white space

//      .toUpperCase() converts all letter to Capital*

// userName = userName.toUpperCase()
// console.log(userName); output to chnage all charater to Capital letter


//      .toLlowerCase() to converts all letter to small capital letter*

// userName = userName.toLowerCase()
// console.log(userName);


// .repeat() to repeat how many we want to repeat*

// userName = userName.repeat(3);
// console.log(userName);


//      .startsWith() if user name start with space is false if no it is true*


// let userName = " SulliavnnSam"
// let result = userName.startsWith(" ");

// // console.log(result);

// if(result){
//     console.log("your username cant began with spcae");
// }
// else{
//     console.log(userName);
// }


//      .endsWith() u cant enter the space at the end of your name*

// let userName = "SullivannSam ";
// let result = userName.endsWith(" ");

// if(result){
//     console.log("you cant add spcae ad the end");
// }
// else{
//     console.log(userName);
// }



//      .includes() you can split ur username into to two ex Sull Sam false, SullSam true*

// let userName = "Sullivann Sam";
// let result = userName.includes(" ");

// if(result){
//     console.log("you cant split your username");
// }
// else{
//     console.log(userName);
// }


//      .replaceAll() to eliminate all space or dash, but we can replace it with other


// let phoneNumber = "123-456-789";

// phoneNumber = phoneNumber.replaceAll("-","");

// console.log(phoneNumber);



//      .padStart() want to user start name only 9 and start the tag or smth with it*

// let phoneNumber = "123-4568";
// phoneNumber = phoneNumber.padStart("9","0")

// console.log(phoneNumber);


//      .padEnd() it the same as the .padStart()


// let phoneNumber = "123-4568";
// phoneNumber = phoneNumber.padEnd("9","0")

// console.log(phoneNumber);

// let phoneNumber = "097-7171-918";


// phoneNumber = phoneNumber.replaceAll("-"," ");
// phoneNumber = phoneNumber.padStart("10","0");
// console.log(phoneNumber);



const phoneNumber = document.querySelector(".number");
const phone = document.querySelector(".submit")



phone.onclick = function(){
    if(phoneNumber){
        phoneNumber.textContent = "alerts you need to enter number correctly";
    }
    else{
        phoneNumber.textContent
    }
}