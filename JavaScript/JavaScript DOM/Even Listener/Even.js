
// Even Listener


// element.addEvenListener("click", function);




// const button = document.querySelector(".Btn2");

// function alertButton(){
//     alert("I love JavaScript, How about you");
// }
// button.addEventListener("click", alertButton);




// Mouseover

// const buttonThree = document.querySelector(".Btn3");
// function changeBgColor(){
//     buttonThree.style.backgroundColor = "blue";
// }
// buttonThree.addEventListener("mouseover", changeBgColor);



// Excerise 

// Reveal Event

// const revealButton = document.querySelector(".reveal-btn");
// const hiddenContent = doucument.querySelector(".hidden-content");

// function revealContent(){
//     if(hiddenContent.classList.contains("reveal-btn")
//     ) {
//         hiddenContent.classList.remove("reveal-btn")

//     }else{
//         hiddenContent.classList.add("reveal-btn")
//     }
    
// }

// revealButton.addEventListener("click", revealContent);


const revealBtn = document.querySelector(".reveal-btn");
const hiddenBtn = document.querySelector(".hidden-content");

function revealButton(){
    if(hiddenBtn.classList.contains("revealBtn")
    ) {
        hiddenBtn.classList.remove("revealBtn")
    }
    else{
        hiddenBtn.classList.add("revealBtn")
    }

}
revealBtn.addEventListener("click", revealButton);



//        Even Delegation


// document.querySelector("#Football").addEventListener("click", function(e){
//     console.log("Football is clicked");

//     const target = e.target;
    
//     if(target.matches("li")){
//         target.style.backgroudColor = "lightgrey";
//     }


// })







































