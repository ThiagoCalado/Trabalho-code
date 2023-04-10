const n1 = Number(prompt('Qual o seu numero'));
const  numH1 = document.getElementById('numero');
const divTexto = document.getElementById('texto');

numH1.innerHTML = n1;
divTexto.innerHTML = `
<p>Raiz ${n1 ** 0.5}</p>
<p>${n1} é inteiro? ${Number.isInteger(n1)}</p>
<p>Arrendonda para baixo ${Math.floor(n1)}</p>
<p>Arrendonda para cima ${Math.ceil(n1)}</p>
<p>Duas casas dec ${n1.toFixed(2)}</p>`
