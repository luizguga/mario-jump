const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add("jump");

    setTimeout(()=>{mario.classList.remove("jump")}, 500);
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

        clearInterval(loop);
        setTimeout(()=>{location.reload(true)},2000);
    }
},10)