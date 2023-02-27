const botao = document.querySelector('.botao');
const botao2 = document.querySelector('.botao2');
const botao3 = document.querySelector('.botao3');
const botao4 = document.querySelector('.botao4');
const botao5 = document.querySelector('.botao5');
const botao6 = document.querySelector('.botao6');
const botao7 = document.querySelector('.botao7');
const chuva = document.querySelector('.chuva');
const gotas = document.querySelector('.gotas');
const quadrado = document.querySelector('.quadrado');
const tela = document.querySelector('.tela');
const nuvem = document.querySelector('.nuvem');
const mario = document.querySelector('.mario');

botao.onclick = () => vezesUm();
botao2.onclick = () => vezesDois();
botao3.onclick = () => vezesTres();
botao4.onclick = () => comChuva();
botao5.onclick = () => semChuva();
botao6.onclick = () => comNuvem();
botao7.onclick = () => semNuvem();

function vezesUm() {

    quadrado.style.animation = 'giro 10s infinite linear';
    tela.style.animation = 'anoitecer 10s linear infinite';
    nuvem.style.animation = 'nuvens 5s infinite linear';
    mario.style.animation = 'marioCorrer 3s linear infinite';
}

function vezesDois() {

    quadrado.style.animation = 'giro 2s infinite linear';
    tela.style.animation = 'anoitecer 2s infinite linear';
    nuvem.style.animation = 'nuvens 2.5s infinite linear';
    mario.style.animation = 'marioCorrer 1s linear infinite';
}

function vezesTres() {
    quadrado.style.animation = 'giro 1s infinite linear';
    tela.style.animation = 'anoitecer 1s infinite linear';
    nuvem.style.animation = 'nuvens 625ms infinite linear';
    mario.style.animation = 'marioCorrer 500ms linear infinite';
}

function comChuva() {
    chuva.style.visibility = 'visible';
    gotas.style.visibility = 'visible';
}
function semChuva() {
    chuva.style.visibility = 'hidden';
    gotas.style.visibility = 'hidden';
}
function comNuvem() {
    nuvem.style.visibility = 'visible';
}
function semNuvem() {
    nuvem.style.visibility = 'hidden';
}