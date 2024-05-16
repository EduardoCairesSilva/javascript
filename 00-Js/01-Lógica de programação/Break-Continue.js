const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let i = 0
while (i < numeros.length) {

    let numero = numeros[i];

    if(numero === 5) {
        console.log('Pulei o número 5')
        i++;
        continue;
    }

    console.log(numero);

    if(numero === 7) {
        console.log('7 foi encontrado')
        i++;
       break
    }

    i++;

}
