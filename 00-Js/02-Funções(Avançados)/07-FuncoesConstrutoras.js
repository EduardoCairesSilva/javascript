// Funções construtoras -> objetos.
// Funções fábricas -> objetos.
// Construtora -> pessoa (new)

function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou método públicos
    this.nome  = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(this.nome + ': sou um método');
    }
}

const p1  = new Pessoa('Maria', 'Leticia');
const p2 = new Pessoa('Eduardo', 'Caires');
p2.metodo();
