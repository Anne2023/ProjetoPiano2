const pianoKeys = document.querySelectorAll("piano-keys.key"); //por padrão, scr de áudio é "a" melodia

let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.scr = `tunes/${key}.wav`; //passando src de áudio com base na tecla pressionada
    audio.play(); //tocando áudio

    const clickedKey = document.querySelector(`[data-key=${key}`)
    clickedKey.classList.add("active"); //adicionando classe ativa ao elemento (chave) clicado
    setTimeout(() => { //removendo a classe ativa após 150 ms do elemento clicado
        clickedKey.classList.remove("active");
    }, 150)
}
pianoKeys.forEach(key =>{
    //chamando a função playtune com a passagem do data-key de dados como um argumento
    key.addEventListener("click", () => playTune(key.dataset.key))
    
});

const pressedKey = (e) => {
    playTune(e.key);
}



document.addEventListener("keydown", pressedKey)