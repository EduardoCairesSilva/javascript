function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = percentual => {
    this.preco = this.preco + (this.preco * percentual / 100);
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        configurable: true,
        enumerable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'Number') return;
            estoque = valor;
        }
    });
};
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Camisa', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 20.90, 'Porcelana');
caneca.estoque = 100;

camiseta.aumento(10);
caneca.aumento(20);

console.log(camiseta);
console.log(caneca);
