function pegarInfos(){
    const form = document.querySelector('.form');

    const resultado = document.querySelector('.resuldado');

    const pessoa = [];

    function recebeEvento(evento){
        evento.preventDefault();
        
        const nome = form.querySelector('nome');
        const sobrenome = form.querySelector('sobrenome');
        const altura = form.querySelector('altura');
        const peso = form.querySelector('peso');
    }

//imprimir na div -> resultado.ihtml +=
//<p> ${nome.valeu} <p/>
//<p> ${sobrenome.valeu} <p/>
    form.addEventListener('submit', recebeEvento);




}

pegarInfos();