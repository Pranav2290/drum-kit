// document.querySelector("button").addEventListener("click",eventListener);

// function eventListener(){
//     alert("I am clicked");
// }

//another way of  doing that
//Detecting Button Press
for(var times=0 ;times<document.querySelectorAll(".drum").length;times++){
    document.querySelectorAll(".drum")[times].addEventListener("click", function(){
        
     var buttonInneerHTML=this.innerHTML;
     
     makeSound(buttonInneerHTML);
    
     buttonAnimation(buttonInneerHTML);
        
    });
    
}

//Detecting Key Press
document.addEventListener("keypress",function(event){
    // console.log(event);
    // alert("Kay is pressed");
    makeSound(event.key);
    buttonAnimation(event.key); 
}); 

function makeSound(Key){
    switch (Key) {
        case "w" :
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
           
        case "a":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();   
            break;
         
        case "d":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
            
        case "k":
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;   
        case "l":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            break;
     }
     

}

function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}