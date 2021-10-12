
btns = document.getElementsByClassName("drum");

playlist = {'w':'sounds/crash.mp3',
            'a':'sounds/kick-bass.mp3',
            's':'sounds/snare.mp3',
            'd':'sounds/tom-1.mp3',
            'j':'sounds/tom-2.mp3',
            'k':'sounds/tom-3.mp3',
            'l':'sounds/tom-4.mp3'}

for(var i=0 ; i<btns.length; i++){
    btns[i].addEventListener("click", function (){
        addAnimation(this.innerText);
        var music = new Audio(playlist[this.innerText]);
        music.play();
    }) ;
}

document.addEventListener("keydown", function (event){
    addAnimation(event.key);
    var music = new Audio(playlist[event.key]);
    music.play();
}) ;

function addAnimation(selectedButton){
    selectedElement = document.querySelector('.'+selectedButton);
    selectedElement.classList.add("pressed");
    setTimeout(function() {
        selectedElement.classList.remove("pressed");
    }, 100);
}
