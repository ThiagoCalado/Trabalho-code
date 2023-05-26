const elementos = [
    {tag: 'p', texto: 'Thiago'},
    {tag: 'section', texto:'Rodrigo'},
    {tag: 'footer', texto: 'Pablo'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; 1 < elementos.length; i++){
    let {tag,texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);