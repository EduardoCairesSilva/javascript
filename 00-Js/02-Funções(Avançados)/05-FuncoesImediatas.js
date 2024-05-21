// IIFE -> Imediately invoked function expression.
// Exemplo: (Function() {})(); ou (() => {})();

(() => {

    const sobrenome = 'Caires';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Eduardo'));
    }

    falaNome();

})();
