/*document.querySelector("button").addEventListener("click",handleClick);
function handleClick(){
    alert("i got clicked");
}*/

//Detecting button Press
var numberOfDrumButtons=document.querySelectorAll(".drum").length
for(var i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //this.style.color="white";//this will specify which button is clicked
    var buttonInnerHTML=this.innerHTML;
    switch (buttonInnerHTML) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
});
}

//keyboard press

document.addEventListener("keydown",function(event){
    makeSound(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}