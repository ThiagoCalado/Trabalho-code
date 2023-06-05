function contagemSegundo(){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone: 'GMT'
    })
};

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar= document.querySelector('.zerar');

let segundos = 0;
let timer;

function inicarContagem(){
    timer = setInterval(() => {
        segundos ++;
        relogio.innerHTML = contagemSegundo(segundos);
    },1000);
}

iniciar.addEventListener('click', (e)=>{
    inicarContagem();
})

pausar.addEventListener('click', (e)=>{
    clearInterval(timer);
    relogio.classList.add('pausa')
})

zerar.addEventListener('click', (e)=>{
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0
})
