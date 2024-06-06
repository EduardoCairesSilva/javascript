// Promises:

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('ERRO'));

        setTimeout(() => {
            resolve(msg);
        }, time)
    });
};

wait('Frase 1', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return wait('Frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return wait('Frase 3', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('ERRO', e);
    });

// Métodos úteis para promises: Promise.all, Promise.race, promise.resolve, Promise.reject.
const promises = [
    'Primeiro valor',
    wait('Promise 1', 3000),
    wait('Promise 2', 500),
    wait('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then((valor) => {
        console.log(valor);
    }).catch(e => {
        console.log(e)
    })

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Página entregue!');
    } else {
        return wait('Baixando página', 3000);
    }
};

baixaPagina()
    .then(dadosPagina => {
        console.log('Dados da página')
    })
    .catch(e => {
        console.log('ERROR: ', e)
    });
