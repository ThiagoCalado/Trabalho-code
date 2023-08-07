module.exports = class Gato{
    constructor(nome){
        this.nome = nome;
    }

    miau(){
        console.log(`${this.nome} esta miando`)
    }
}