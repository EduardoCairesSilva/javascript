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

async function executa() {
    try {
        const fase1 = await wait('fase 1', rand(1, 5));
        console.log(fase1);
        const fase2 = await wait('fase 2', rand(1, 5));
        console.log(fase2);
        const fase3 = await wait('fase 3', rand(1, 5));
        console.log(fase3);
    } catch (e) {
        console.log(e);
    };
};
executa();
