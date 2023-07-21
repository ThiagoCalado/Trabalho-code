//PROMISES

// function loading(msg, tempo){
//     setTimeout(()=>{
//         console.log(msg);
//     }, tempo);
// }

//aplicndo promises
// function loading(msg, tempo) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(msg);
//         }, tempo);
//     });
// }

//reject

function loading(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

//n aleatorio

function randomize(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.floor(Math.random() * (max - min) + min);
}

// loading('Now loading...', randomize(1,5));
// loading('Wait for loadinh...', randomize(1,5));
// loading('loading complit...', randomize(1,5));

// loading('Now loading...', randomize(1,5)).then(resposta => {
//     console.log(resposta);
//     return loading('Wait for loading...', randomize(1,5));
// })
// .then(resposta => {
//     console.log(resposta);
//     return loading('loading complete...', randomize(1,5));
// })
// .then(resposta =>{
//     console.log(resposta)
// })
// .catch();

// loading('Now loading...', randomize(1,5)).then(resposta => {
//     console.log(resposta);
//     return loading(500, randomize(1,5));
// })
// .then(resposta => {
//     console.log(resposta);
//     return loading('loading complete...', randomize(1,5));
// })
// .then(resposta =>{
//     console.log(resposta)
// })
// .catch(e =>{
//     console.log('ERRO', e)
// });

/*** ASYNC E AWAIT */

// async function executa(){
//     const load1 = await loading('Now loading...', randomize(1,5))
//     console.log(load1)

//     const load2 = await loading('Wait for loading...', randomize(1,5))
//     console.log(load2)

//     const load3 = await loading('loading complete...', randomize(1,5))
//     console.log(load3)
// }
// executa();
async function executa() {
    try {
        const load1 = await loading('Now loading...', randomize(1, 5))
        console.log(load1)

        const load2 = await loading(500, randomize(1, 5))
        console.log(load2)

        const load3 = await loading('loading complete...', randomize(1, 5))
        console.log(load3)

    } catch (error) {
        console.log(error);
    }
}
executa();