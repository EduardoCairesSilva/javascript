class Pessoa {
    constructor(nome, sobrenome) {
        this.nome= nome;
        this.sobrenome = sobrenome;
    }

    falar () {
        console.log(`${this.nome} está falando.`)
    }
}

const p1 = new Pessoa('Eduardo', 'Caires');
p1.falar();
