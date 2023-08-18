const express = require('express');

const app = express();

/**
 * ROTAS
 * https://meusite.com <- GET
 * https://meusite.com/sobre <- GET
 * 
 * CRUD (crat/POST - Read/GET - Update/PUT, Delete/Delete)
 */
// app.get('/',(req, res) =>{
//     res.send('Um site');
// });

//POST

app.get('/', (req, res) => {
    res.send(
        `
        <form action = "/" method="POST">
        Nome: <input type="text" name="nome">
        <button> Enviar </buttons>
        </form>
        `
    )
})

//rota nova

app.get('/contato', () => {
    res.send('Vc acessou a pagina de contato');
});



app.listen(3000, () => {
    console.log('http://localhost:3000');
});
