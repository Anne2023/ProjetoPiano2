const pianoKeys = document.querySelectorAll("piano-keys.key"); //por padrão, scr de áudio é "a" melodia

let audio = new Audio("tunes/a.wav");

const playTune = (key) = >{
    audio.play(); //tocando áudio
}

pianoKeys.forEach(key =>{
    //chamando a função playtune com a passagem do data-key de dados como um argumento

    key.addEventListener("click", () => playTune(key.dataset.key))
    
});