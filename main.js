const pianoKeys = document.querySelectorAll(".piano-keys.key"), //por padrão, scr de áudio é "a" melodia
volumeSlider = document.querySelectorAll(".volume-slider.input"),
keyCheckbox = document.querySelectorAll(".keys-checkbox.input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.scr = `tunes/${key}.wav`; //passando src de áudio com base na tecla pressionada
    audio.play(); //tocando áudio
   
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active"); //adicionando classe ativa ao elemento (chave) clicado
    setTimeout(() => { //removendo a classe ativa após 150 ms do elemento clicado
        clickedKey.classList.remove("active");
    }, 150)
}

pianoKeys.forEach(key =>{ //adicionando valor da chave de dados ao array
    allKeys.push(key.dataset.key);
    //chamando a função playtune com a passagem do data-key de dados como um argumento
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handVolume = (e) => {
    audio.volume = e.target.value; //passando o rang (valor) como um volume de áudio
}

const shadowHideKeys = () => {
    //alternando para ocultar a classe de cada tecla na caixa de seleção, clique
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}

const pressedKey = (e) => {
    //(se) a tecla pressionada estiver no allkeys, apenas chama a função playtune
    if(allKeys.includes(e-key))playTune(e.key);
}

keyCheckbox.addEventListener("click", shadowHideKeys)
volumeSlider.addEventListener("input", handVolume)
document.addEventListener("keydown", pressedKey)