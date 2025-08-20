const intext = document.getElementById("intext");
const submit = document.getElementById("submit");

let username;

submit = document.getElementById("submit").onclick = function(){
    username = document.getElementById("intext").value;
    document.getElementById("greeting").textContent = `Welcome, ${username}`;
}



