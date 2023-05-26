// // let data_americana = "2020-12-30";
// // let data_brasileira = data_americana.split('-').reverse().join('/');

// // Pronto! A data foi convertida.
// // console.log(data_brasileira); // retorna: 30/12/2020

// // const data_americana = new Date();
// // const dataBrasil = data_americana.split('-').reverse().join('/');

// // console.log(dataBrasil);
// const h1 = document.querySelector('.container h1');

// const data = new Date();
// const diaSemana = data.getDay();
// const diaMes = data.getMonth();
// const dia = data.getDate();
// const ano = data.getFullYear();

// let nomeDia
// let nomeMes

// switch (diaSemana) {
//     case 0:
//         nomeDia = 'Dom';
//         break;
//     case 1:
//         nomeDia = 'Seg';
//         break;
//     case 2:
//         nomeDia = 'Ter';
//         break;
//     case 3:
//         nomeDia = 'Qua';
//         break;
//     case 4:
//         nomeDia = 'Qui';
//         break;
//     case 5:
//         nomeDia = 'Sex';
//         break;
//     case 6:
//         nomeDia = 'Sab';
//         break;
//     default:
//         nomeDia = 'Nao tem esse dia';

// }
// switch (diaMes) {
//     case 0:
//         nomeMes = 'jan';
//         break;
//     case 1:
//         nomeMes = 'Fev';
//         break;
//     case 2:
//         nomeMes = 'Mar';
//         break;
//     case 3:
//         nomeMes = 'Abr';
//         break;
//     case 4:
//         nomeMes = 'Mai';
//         break;
//     case 5:
//         nomeMes = 'Jun';
//         break;
//     case 6:
//         nomeMes = 'Jul';
//         break;
//     case 7:
//         nomeMes = 'Ago';
//         break;
//     case 8:
//         nomeMes = 'Set';
//         break;
//     case 9:
//         nomeMes = 'Out';
//         break;
//     case 10:
//         nomeMes = 'Nov';
//         break;
//     case 11:
//         nomeMes = 'Dez';
//         break;
//     default:
//         nomeMes = 'Nao tem esse Mes';

// }



// h1.innerHTML = `${nomeDia}, ${dia} de ${nomeMes} de ${ano} `;

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