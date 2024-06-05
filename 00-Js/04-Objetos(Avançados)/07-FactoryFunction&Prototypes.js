const falar = {
    falar() {
        console.log(`${this.nome} está falando.`)
    }
}

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`)
    }
}

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`)
    }
}

const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Eduardo', 'Caires');
p1.falar();
p1.comer();
p1.beber();
