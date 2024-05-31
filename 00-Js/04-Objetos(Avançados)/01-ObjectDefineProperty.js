function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // Mostra a chave
        value: estoque, // Mostra o valor
        writable: true, // Pode alterar o valor? (True para alterar e false para não poder alterar)
        configurable: false, // Configurável em outro Object.defineProperty (True se poder reconfigurar e false para que não possa reconfigurar)
    });
};

const p1 = new Produto('Camiseta', 30);
console.log(p1);

function Pessoa(nome, sobrenome, idade) {
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: true
        },
        sobrenome: {
            enumerable: true,
            value: sobrenome,
            writable: true,
            configurable: true
        },
        idade: {
            enumerable: true,
            value: idade,
            writable: true,
            configurable: true
        }
    });
};

const p2 = new Pessoa('Eduardo', 'Caires', 20);
console.log(p2)
