const music = document.getElementById("music");
let musicstate = localStorage.getItem("mutedstate")
let volumestate = localStorage.getItem("volume")
window.onload = start;




if(musicstate === "true"){
    music.muted = true;
}
else{
    music.muted = false;
}
function start(){
    music.play();
    if(volumestate === null){
        music.volume = 0.04;

    }
    else{
        music.volume = volumestate
    }

    let musicstate = localStorage.getItem("mutedstate");
    if(musicstate === "true"){
        document.getElementById("musictexto").textContent = "▶︎";
    }
    else{
        document.getElementById("musictexto").textContent = "❚❚";
    }
}
function playpause(){

    music.muted = !music.muted;
    localStorage.setItem("mutedstate", music.muted) ;
    start();
    
}

function volumeup(vol = 0.03){
    let newvolume = music.volume + vol;
    if (newvolume > 1 ){
        newvolume = 1
    }
    music.volume = newvolume
    localStorage.setItem("volume", music.volume);
}
function volumedown(vol = 0.03){
    let newvolume = music.volume - vol;
    if (newvolume < 0 ){
        newvolume = 0
    }
    music.volume = newvolume
    localStorage.setItem("volume", music.volume);
}