
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
        var music = new Audio(playlist[this.innerText]);
        music.play();
    }) ;
}

document.addEventListener("keydown", function (event){
    var music = new Audio(playlist[event.key]);
    music.play();
}) ;
