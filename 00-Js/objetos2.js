const pessoa = {
    nome: 'Eduardo',
    sobrenome: 'Caires',
    idade: 20,
    endereco: {
        rua: 'Av. Brasil',
        cidade: 'SP'
    }
}

// Atribuição via desestruturação
const { nome, ...resto } = pessoa;
const { endereco: {rua, cidade} } = pessoa;
console.log(nome, resto);
console.log(rua, cidade);
