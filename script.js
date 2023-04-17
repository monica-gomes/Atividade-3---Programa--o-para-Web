const btJogador1 = document.getElementById('btJogador1');
const btJogador2 = document.getElementById('btJogador2');
const btReiniciar = document.getElementById('btReiniciar');
const resultado = document.getElementById('resultado');
const numRodada = document.getElementById('numeroRodada');

let Jogador1 = 0;
let Jogador2 = 0;
let jogadaAtual = 1;
let rodadasJogadas = 0;
let numeroRodada = 0;

function rodarDado() {
    const sorteio = Math.floor(Math.random() * 6) + 1;
    resultado.innerText = `Jogador ${jogadaAtual}: ${sorteio}`;

    if (jogadaAtual === 1) {
        Jogador1 += sorteio;
        jogadaAtual = 2;
        
        btJogador1.disabled = true;
        btJogador2.disabled = false;
    }
    else {
        Jogador2 += sorteio;
        jogadaAtual = 1;
        rodadasJogadas++;
        numRodada.innerHTML = rodadasJogadas;

        btJogador1.disabled = false;
        btJogador2.disabled = true;
    }


    if (rodadasJogadas === 10) {
        if (Jogador1 > Jogador2) {
            resultado.innerText += "\nJogador 1: Você Venceu!";
        }
        else if (Jogador2 > Jogador1) {
            resultado.innerText += "\nJogador 2: Você Venceu!";
        }
        else {
            resultado.innerText += "\nEmpate!";
        }

        btJogador1.disabled = true;
        btJogador2.disabled = true;
    }
}

btJogador1.onclick = rodarDado;
btJogador2.onclick = rodarDado;
btReiniciar.onclick = function () {
    Jogador1 = 0;
    Jogador2 = 0;
    jogadaAtual = 1;
    rodadasJogadas = 0;
    numRodada.innerHTML = 0;
    resultado.innerText = "";
    btJogador1.disabled = false;
    btJogador2.disabled = false;
}