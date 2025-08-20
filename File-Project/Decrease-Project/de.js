const label = document.querySelector(".number");
const Decrease = document.querySelector(".btn-de");
const Reset = document.querySelector(".btn-re");
const Increase = document.querySelector(".btn-in");


let count = 0;
Decrease.onclick = function(){
    count--;
    number.textContent = count + "cm";
}

Reset.onclick = function(){
    count = 0;
    number.textContent = count;
}

Increase.onclick = function(){
    count ++;
    number.textContent = count + "cm";
}









