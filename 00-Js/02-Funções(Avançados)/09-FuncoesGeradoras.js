function* gerador1() {

    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';

}

// const g1 = gerador1();
// for(let valor of g1) {
//     console.log(valor);
// };

function* gerador2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
    }
}
const g2 = gerador2();
// console.log(g2.next().value);

function* gerador3() {
    yield 0;
    yield 1;
    yield 2;
}

function* gerador4() {
    yield* gerador3;
    yield 3;
    yield 4;
    yield 5;
}

const g4 = gerador4;

function* gerador5() {
    yield function() {
        console.log('Sou eduardo');
    }

    // ......

    yield function() {
        console.log('Me chamo eduardo');
    }

}

const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;
