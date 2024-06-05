// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (valor > this.saldo) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}`)
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: R$ ${this.saldo.toFixed(2)}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(50);
cc.sacar(150);
cc.sacar(1);

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp = new ContaPoupanca(11, 22, 0);
cp.depositar(50);
cp.sacar(150);
cp.sacar(1);
