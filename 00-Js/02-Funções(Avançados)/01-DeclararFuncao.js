// Declaração de função (Function Hoisting).
falaOi();
function falaOi() {
    console.log('Oie')
};

// First-class objects (Objetos de primeira classe).
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};

function executarFuncao (funcao) {
    console.log('Irei executar sua função logo abaixo:');
    funcao();
};
executarFuncao(souUmDado);

// Arrow function:
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto

const obj = {
    falar () {
        console.log('Estou dentro de um objeto.')
    }
}
obj.falar();
