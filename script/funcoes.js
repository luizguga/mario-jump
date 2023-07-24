const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const pontos = document.querySelector('.pontos');
const gameBoard = document.querySelector('.gameboard');

let ligarScore = false;
let score = 0;
pontos.innerHTML = score;

const jump = () => {
    mario.classList.add("jump");

    setTimeout(()=>{
        mario.classList.remove("jump");

        if(ligarScore){
            pontos.innerHTML = ++score;
        }
    }, 500);

}

document.addEventListener('touchstart', jump);
document.addEventListener('keydown', jump);


const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition <= 80){
        ligarScore = false;
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.src = 'imagens/game-over.png';
        mario.style.bottom = `${marioPosition}px`;
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        const telaGameOver = document.createElement('div');
        telaGameOver.setAttribute('class', 'telagameover');
        gameBoard.appendChild(telaGameOver);

        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        telaGameOver.appendChild(container)

        const paragrafo = document.createElement('p');
        paragrafo.setAttribute('class', 'gameover');
        paragrafo.innerText = 'Game Over';
        container.appendChild(paragrafo);

        const botaoReinicio = document.createElement('button');
        botaoReinicio.setAttribute('class', 'botaoreinicio');
        botaoReinicio.innerText = 'Reiniciar';
        container.appendChild(botaoReinicio);

        botaoReinicio.addEventListener('click', ()=>{location.reload(true)});

        clearInterval(loop);
    }else {
        ligarScore = true;
    }
},10)