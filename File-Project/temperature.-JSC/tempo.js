


const userInput = document.getElementById("temperature");
const Fahrenheit = document.getElementById("radio-Fahrenheit");
const celsius = document.getElementById("radio-Celsius");
const resultBtn = document.getElementById("result");

let temp;


function convert(){
    if(Fahrenheit.checked){
        temp = Number(userInput.value);
        temp = temp * 9 / 5 + 32;
        resultBtn.textContent = temp.toFixed(1) + "°F";

    }
    else if (celsius.checked){
        temp = Number(userInput.value);
        temp = (temp - 32) * (5 / 9);
        resultBtn.textContent = temp.toFixed(1) + "°C"; 

    }else{
        resultBtn.textContent = "Select to Change the Temperature";
    }

}

