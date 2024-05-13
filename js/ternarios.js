// (condição) ? 'Valor para verdadeiro' : 'Valor para falso'; 

const pontuacaoUsuario = 900;

// If e else:

/* if(pontuacaoUsuario >= 1000) {
    console.log('Usuario VIP')
} else {
    console.log('Usuario normal')
} */

// Operador ternário:

pontuacaoUsuario >= 1000 ? console.log('Usuario VIP') : console.log('Usuario normal');

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(corPadrao)
