const HomeModel = require('../models/HomeModel');

HomeModel.create({
    titulo: 'qualquer coisa',
    descricao: 'Fim'
})
.then((dados => console.log(dados)))
.catch(e => console.log(e));

HomeModel.find()
.then((dados => console.log(dados)))
.catch(e => console.log(e));


exports.homePage = (req,res) =>{
    res.render('index');
}

exports.actionPost = (req,res) =>{
    res.send('Isso veio de um post')
}