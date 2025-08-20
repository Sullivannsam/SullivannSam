
const userInput = document.getElementById("temp");
const fs = document.getElementById("fs");
const cs = document.getElementById("cs");
const resultUser = document.getElementById("result");

let temp;

function convert(){
    if(fs.checked){
        temp = Number(userInput.value);
        temp = temp * 9 / 5 + 32;
        resultUser.textContent = temp.toFixed(1) + "°F";
    }
    else if(cs.checked){
        temp = Number(userInput.value);
        temp = (temp - 32) * (5 / 9);
        resultUser.textContent = temp.toFixed(1) + "°C";
    }
    else{
        resultUser.textContent = "Select  to convert into Fs or Cs";
    }
}





