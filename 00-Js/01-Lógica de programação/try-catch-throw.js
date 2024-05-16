function soma(x, y) {

    if (typeof x !== 'number' && typeof y !== 'number') {
        throw('x e y precisam ser números.')
        // throw new ReferenceError('x e y precisam ser números.')
    }

    if (typeof x !== 'number') {
        throw('x precisa ser um número.')
        // throw new Error('x precisa ser um número.')
    }

    if (typeof y !== 'number') {
        throw('y precisa ser um número.')
        // throw new Error('y precisa ser um número.')
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch(e) {
    console.log(e)
    // console.log('Algum dos ou ambos os valores não é/são número(s).')
}
