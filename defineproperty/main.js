//Object.defineproperty
function Produto(nome, valor, estoque){
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

    Object.defineProperties(this,{
        nome:{
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        valor:{
            enumerable: true,
            value: valor,
            writable: true,
            configurable: true
        },
        estoque:{
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        }
    })

}

const p1 = new Produto('lapis', 16, 10);
p1.estoque = 15
console.log(p1.nome, p1.valor, p1.estoque)