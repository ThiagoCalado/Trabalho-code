import GeraCpf from './modules/GerarCpf';

import './assets/css/styles.css';

(function(){
    const gera = new GeraCpf;
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCpf();
})()