function Carro(nome, modelo){

    //atributos Privados
    const ID = 123456789;
    const metodoInterno = function(){
        //metodo que só vai ser visto internamente, na função
    }

    //atributo Publico
    this.nome = nome;
    this.modelo = modelo;

    this.metodo = function(){
        console.log(this.modelo + ': sou um metodo');
    }
}

const car1 = new Carro('Fiat', 'Uno');
const car2 = new Carro('VW', 'Fusca');

car2.metodo();

