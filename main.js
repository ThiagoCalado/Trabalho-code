//Object.defineproperty
// function Produto(nome, valor, estoque){
    //this.nome = nome;
    //this.valor = valor;

    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true,
    //     configurable: true,
    //     //writable: true,
    //     //value: estoque
        
    //     get: function(){
    //         return estoque
    //     },
    
    //     set: function(valor){
    //         if(typeof valor !== 'number'){
    //             throw new TypeError('escreva uma mesnagem de erro');
    //         }
    //         estoque = valor;
    //     }
        
    // });

//     Object.defineProperties(this,{
//         nome:{
//             enumerable: true,
//             value: nome,
//             writable: true,
//             configurable: true
//         },
//         valor:{
//             enumerable: true,
//             value: valor,
//             writable: true,
//             configurable: true
//         },
//         estoque:{
//             enumerable: true,
//             value: estoque,
//             writable: true,
//             configurable: true
//         }
//     })

// }

// const p1 = new Produto('lapis', 16, 10);
// p1.estoque = 15
// console.log(p1.nome, p1.valor, p1.estoque);

//Prototype

// function Pessoa(nome, sobrenome){
//     this.nome = nome;
//     this.sobrenome = sobrenome;

//     //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
// }

// Pessoa.prototype.nomeCompleto = function(){
//     return this.nome + ' ' + this.sobrenome
// }

// const p1 = new Pessoa('ze', 'droguinha');
// const p2 = new Pessoa('jo', 'todinho');
// const data = new Date();

// console.log(p1);
// console.dir(data);

// herança;
/**
 * 
 * 
 */

// function Produto(nome, preco){
//     this.nome = nome;
//     this.preco = preco;
// }

// function Carro(nome, preco, cor){
//     Produto.call(this, nome, preco);
//     this.cor = cor;
// }

// const carro = new Carro('fiat', 30.000,'preto');

// console.log(carro);

//SuperClass
// function Conta(agencia, conta, saldo){
//     this.agencia = agencia;
//     this.conta = conta;
//     this.saldo = saldo;
// }

// Conta.prototype.sacar = function (valor){
//     if(this.saldo < valor){
//         console.log('vc ta pobre');
//         return
//     }
//     this.saldo = valor;
//     this.verSaldo();
// }

// Conta.prototype.depositar = function(valor){
//     this.saldo += valor;
//     this.verSaldo();
// }

// Conta.prototype.verSaldo = function(){
//     console.log(`ag/c ${this.agencia} / ${this.conta}
//     Saldo: R$${this.saldo.toFixed(2)}`);
// }

// //
// function ContaCorrente(agencia, conta, saldo, limite){
//     Conta.call(this, agencia, conta, saldo);
//     this.limite = limite;
// }

// ContaCorrente.prototype = Object.create(Conta.prototype);
// ContaCorrente.prototype.constructor = ContaCorrente;

// ContaCorrente.prototype.sacar = function(valor){
//     if(valor > (this.saldo + this.limite)){
//         console.log(`vc ta pobre: ${this.saldo}`)
//         return;
//     }

//     this.saldo -= valor;
//     this.verSaldo();
// }

// const cc = new ContaCorrente(13, 221, 500, 1000);
// cc.depositar(100);
// cc.sacar(1900);
// console.log(cc);

// const c1 = new Conta(12, 123, 1000);
// c1.depositar(500);
// c1.sacar(900);
// console.log(c1);

/**
 * CLASS
 */

// class Pessoa{
//     constructor(nome, sobrenome){
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     fala(){
//         console.log(`${this.nome}: falow com vc`)
//     }

//     beber(){
//         console.log(`${this.nome}: bebeu vinho!`);
//     }
// }

// const p1 = new Pessoa('Leila', 'Santos');
// const p2 = new Pessoa('jose', 'Santos');
// const p3 = new Pessoa('Ricadão', 'Santos');
// console.log(p1);
// console.log(p2.fala());
// console.log(p3.beber());

//
class Carro{
    constructor(nome){
        this.nome = nome;
        this.velocidade = 0;
    }

    acelerar(){
        if(this.velocidade >= 220) return;
        this.velocidade ++;
    }

    freiar(){
        if(this.velocidade <= 0) return;
        this.velocidade --;
    }
}

const cr1 = new Carro('veloster');

for(let i = 0; i <= 220; i++){
    cr1.acelerar();
}

console.log(cr1)