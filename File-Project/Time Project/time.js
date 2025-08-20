const startstopbtn = document.querySelector("startstopbtn");
const resetbtn = document.querySelector("resetbtn");

let seconds = 0;
let minutes = 0;
let hours = 0;

function stopWatch(){
    
    
    seconds= 0++;
    if(seconds / 60 === 1){
        seconds = 0 ;
        minutes ++;
    
        if(minutes / 60 ===1){
            minutes = 0;
            hours++
        }
    }

    let displayTimer = document.getElementById("timer").innerText = hours
    + ':' + minutes + ':' + seconds;
}

window.setInterval(stopWatch, 1000)

