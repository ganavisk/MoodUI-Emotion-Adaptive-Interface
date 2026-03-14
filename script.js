function setMood(mood){

let body=document.getElementById("body");
let message=document.getElementById("message");

if(mood==="happy"){
body.style.background="#ffe066";
message.innerHTML="Stay positive and energetic!";
}

if(mood==="calm"){
body.style.background="#cce5ff";
message.innerHTML="Relax and work peacefully.";
}

if(mood==="focus"){
body.style.background="#d4edda";
message.innerHTML="Focus mode activated.";
}

}
