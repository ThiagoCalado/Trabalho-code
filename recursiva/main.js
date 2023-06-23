//função recursiva são aquelas que chama a si mesma.

// function recursiva(max){
//     console.log(max);
//     if(max >= 10) return;
//     max++;
//     recursiva(max);
// }
// recursiva(5);

// function* geradora1(){
//     //codigo...
//     yield 'Valor 1';

//     //mais codigo 
//     yield 'Valor 2'

//     //mais codigo
//     yield 'Valor 3'
// }

// const g1 = geradora1();

// console.log(g1.next())
// console.log(g1.next())
// console.log(g1.next())
// console.log(g1.next())


// function* geradora2(){
//     let i = 0;

//     while(true){
//         yield i;
//         i++;
//     }
// }

// const g2 = geradora2();
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)
// console.log(g2.next().value)

// function* geradora3(){
//     yield 1;
//     yield 2;

// }

// function* geradora4(){
//     yield* geradora3();
//     yield 8;
//     yield 9;
//     yield 20;
// }
// const g4 = geradora4();
// for(let valor of g4){
//     console.log(valor);
// }

function* geradora5(){
    yield function(){
        console.log('vim do y1')
    }

    yield function(){
        console.log('vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func2();
func1();