const pessoa1 = {
    nome: 'eduardo',
    sobrenome: 'caires',
    idade: '20',


    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem a idade de ${this.idade}`)
    }
}

pessoa1.fala()
