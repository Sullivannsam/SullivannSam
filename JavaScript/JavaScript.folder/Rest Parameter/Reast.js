

// rest parameters =  (...rest) allow a function work with a variable
//          number of arguments by bunding them into array 
//          spread = expands an array  into seperate elements 
//          rest = bundle seperate elements into an array



// function allPlayers(...player){
//     console.log(...player);
// }

// const Player1 = "Sullivann Sam";
// const Player2 = "Mongkol";
// const Player3 = "Vitou";
// const Player4 = "Hong";


// allPlayers(Player1, Player2, Player3);


// function sum(...numbers){

//     let result = 0;
//     for(let number of numbers){
//         result += number;

//     }
//     return result;


// }
// const total = sum(1,5,5);
// console.log(`your total is ${total}$`);





// let drink = 10;
// let food = 19;
// let ticket = 30;


// function totalCost(...numbers){
//     let total = 0 ;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;

// }
// const total = totalCost(10,19,30);
// console.log(`your total prices is ${total}$`);






let BMW = 10000;
let Porsche = 40000;
let Tesla = 50000;
let Mercedes = 60000;

function totalPrice(...numbers){
    let Total = 0;
    for(let number of numbers){
        Total += number;
    }
    return Total;
}

const Total = totalPrice(10000, 40000, 50000, 60000);
console.log(`you has bought many cars, and the total price is ${Total}$`);


































