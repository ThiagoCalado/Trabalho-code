require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path')

const routes = require('./routes');

//connection bd
const mongoose = require('mongoose');

mongoose.connect(process.env.CONECTIONSTRING)
.then(() =>{
    console.log('Acessou bd agora');
    app.emit('pronto');
})
.catch(e => console.log(e));

//sessions
const session = require('express-session');
const MongSession = require('connect-mongo');
const flash = require('connect-flash');



app.use(express.urlencoded({extends: true}));
app.use(express.static(path.resolve(__dirname,'public')));

const sessionOptions = new session({
    secret: 'secret msm',
    store:  MongSession.create({mongoUrl: process.env.CONECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);
app.use(flash());

app.use(routes);

app.set('views', path.resolve(__dirname,'src','views'));
app.set('view engine', 'ejs');

app.on('pronto', ()=>{
    app.listen(3000, () => {
        console.log('http://localhost:3000');
    });
});
