/* 

Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
...(spread)

// Já vimos:
Object.kes(retorna as chaves)
Object.freeze(Congela o objeto)
Object.defineProperties(Define várias propriedades)
Object.defineProperty(Define uma propriedade)

*/
const produto = { nome: 'Caneca', preco: 1.8 };
const caneca = Object.assign({}, produto, { material: 'porcelana' });

produto.nome = 'Coquinha gelada';
caneca.preco = 2.5;

console.log(produto);
console.log(caneca);

for(let entry of Object.entries(produto)) {
    console.log(entry)
};
