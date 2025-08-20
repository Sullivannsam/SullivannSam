//const cards = document.getElementById("card");
//console.log(cards);

//const container = document.getElementsByClassName("conatiner");
//console.log(container);

//const container = document.getElementsByTagName("li");
//console.log(container);

//const container = document.querySelector("div");
//console.log(container);

//const card = document.querySelectorAll("div");
//console.log(card);


// const card = document.querySelectorAll("div");
// console.log(card);




// const main = document.querySelector('#header');

// main.style.color = 'red';

// console.log(main);

// const ul = document.querySelector("ul");

// console.log(ul.parentNode);
// console.log(ul.parentElement);

// const html = document.documentElement;

// console.log(html.parentNode);
// console.log(html.parentElement);

//

// const btn = document.querySelector("#btn2");

// function alertBtn(){
//     alert('i love u');
// }

// btn.addEventListener("click",alertBtn);


// const background = document.querySelector(".box");

// function changeBgColor(){
//     background.style.backgroundcolor = 'blue';
// }

// background.addEventListener("mouseover" ,changeBgColor);


// mouseover/////


// const container = document.querySelector("#container");

// function changeBgColor(){
//     container.style.backgroundColor = 'blue';
// };

// container.addEventListener('mouseover', changeBgColor);

const cardbtn = document.querySelector('.card');

const container = document.querySelector('.cards');

function revealContent (){
    if(container.classList.contains('card')
    ) {
        container.classList.remove('card')
    } else{
        container.classList.add('card')
    }
}

cardbtn.addEventListener('click', revealContent);















