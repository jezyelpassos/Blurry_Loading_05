//LOAD BLUR EFFECT

const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30); //executa a função em um intervalo de 30 milissegundos

function blurring() {
    //pegando o valor de carregamento e incrementá-lo em um;
    load++

        if (load > 99) {
            clearInterval(int)
        }


    loadText.innerText = `${load}%`
    //vai começar totalmente opaco e então vai começar a desaparecer a medida que carrega até 100%.
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //agora o desfoque do carregamento da imagem
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}



