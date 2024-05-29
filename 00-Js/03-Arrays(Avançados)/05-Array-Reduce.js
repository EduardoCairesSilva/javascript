// Reduce -> Mais utilizada para reduzir o array para um único elemento.

// Some todos os números(Reduce):
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeroTotal = numeros.reduce((acumulador, valor) => {
    acumulador += valor;
    return acumulador;
}, 0);
console.log(numeroTotal);


// Retorne a pessoa mais velha:
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 67 },
    { nome: 'Wallace', idade: 47 },
]

const Older = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(Older);
