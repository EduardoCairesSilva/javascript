const pessoas = [
    { id: 3, nome: 'Eduardo' },
    { id: 2, nome: 'Luiz' },
    { id: 1, nome: 'Maria' },
];

// const novasPessoas = {};
// for (const pessoa of pesssoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (const pessoa of pesssoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
