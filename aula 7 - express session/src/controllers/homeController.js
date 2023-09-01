// const HomeModel = require('../models/HomeModel');

// HomeModel.create({
//     titulo: 'qualquer coisa',
//     descricao: 'Fim'
// })
// .then((dados => console.log(dados)))
// .catch(e => console.log(e));

// HomeModel.find()
// .then((dados => console.log(dados)))
// .catch(e => console.log(e));

//MVC - Model View Controller

exports.homePage = (req,res) =>{
    // req.session.usuario = {nome: 'JOJO', logado: true};
    // console.log(req.session.usuario);
    req.flash('info','Sucumba');
    console.log(req.flash('info'));
    res.render('index');
}

exports.actionPost = (req,res) =>{
    res.send('Isso veio de um post')
}