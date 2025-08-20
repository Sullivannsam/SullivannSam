



let minNum = 1;
let maxNum = 100;
let answer = Math.floor (Math.random() * (minNum - maxNum +1)) + minNum;

let guess;
let attemps = 0;
let running = true;

while(running){
    guess = window.prompt(`guess number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.prompt(`enter a valid number`)
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`enter a valid number`);
    }
    else{
        attemps++;
        if(guess < answer){
            window.alert(`The number is too low try again`);
        }
        else if(guess < answer){
            window.alert(`The number is too height try agian`);
        }
        else{
            window.alert(`the answer is correct ${answer} your attemts is ${attemps}`)
            running = false;
        }
    }
}












