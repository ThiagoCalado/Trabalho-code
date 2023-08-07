const fs = require('fs').promises;

const path = require('path');

const caminhoArquivo = path.resolve(__dirname,'..', 'test.json')

const animais = [
    {nome: 'Gato'},
    {nome: 'Cachorro'},
    {nome: 'Leão'},
    {nome: 'Vaca'}
]

const json = JSON.stringify(animais, '', 2);

fs.writeFile(caminhoArquivo, json, {
    flag: 'w',
    encoding: 'utf8',
})