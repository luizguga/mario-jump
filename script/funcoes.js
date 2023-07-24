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
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.src = 'imagens/game-over.png';
        mario.style.bottom = `${marioPosition}px`;
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        const telaGameOver = document.createElement('div');
        telaGameOver.setAttribute('class', 'telagameover');
        telaGameOver.style.position = 'absolute';
        telaGameOver.style.display = 'flex';
        telaGameOver.style.top = '0';
        telaGameOver.style.left = '0';
        telaGameOver.style.justifyContent = 'center';
        telaGameOver.style.alignItems = 'center';
        telaGameOver.style.backgroundColor = 'rgb(135, 206, 235, .9)';
        gameBoard.appendChild(telaGameOver);

        const container = document.createElement('div');
        container.setAttribute('class', 'container');
        container.style.textAlign = 'center';
        telaGameOver.appendChild(container)

        const paragrafo = document.createElement('p');
        paragrafo.setAttribute('class', 'gameover');
        paragrafo.innerText = 'Game Over';
        paragrafo.style.marginBottom = '20px';
        container.appendChild(paragrafo);

        const botaoReinicio = document.createElement('button');
        botaoReinicio.setAttribute('class', 'botaoreinicio');
        botaoReinicio.innerText = 'Reiniciar';
        botaoReinicio.style.display = 'inline-block';
        botaoReinicio.style.cursor = 'pointer';
        botaoReinicio.style.padding = '5px';
        container.appendChild(botaoReinicio);

        botaoReinicio.onclick = ()=>{location.reload(true)};

        clearInterval(loop);

        ligarScore = false;
    }else {
        ligarScore = true;
    }
},10)