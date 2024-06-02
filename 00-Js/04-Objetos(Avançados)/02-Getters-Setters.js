function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if(typeof valor !== 'number') {
                throw new TypeError('Só aceita números inteiros.');
            }

            return estoquePrivado = valor;
        }
    });
};

const p1 = new Produto('Camiseta', 30);
p1.estoque = 555;
// console.log(p1);
console.log(p1.estoque);
