// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 - Marco zero unix ou época unix

// const data = new Date('2019-04-20 15:16:17.500');


// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay());

// console.log(data.toString());
// console.log(Date.now());

function zeroEsquerda(Numero) {
    return Numero >= 10 ? Numero : `0${Numero}`;
}

function formataData(data) {
    const Dia = zeroEsquerda(data.getDate());
    const Mes = zeroEsquerda(data.getMonth() + 1);
    const Ano = zeroEsquerda(data.getFullYear());
    const Hora = zeroEsquerda(data.getHours());
    const Min = zeroEsquerda(data.getMinutes());
    const Seg = zeroEsquerda(data.getSeconds());

    return `${Dia}/${Mes}/${Ano} ${Hora}:${Min}:${Seg}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
