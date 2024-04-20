/*  Operadores lógicos 

 >
 <
 >=
 <=
 ==
 ===
 !==
 !=
 &&
 ||

*/

/* let carrinho = 1000;
let minimoParaDarODesconto = 800;
let taxa = 0.1;
let taxa2 = 0.2;

if (carrinho >= minimoParaDarODesconto && carrinho < 1500) {
    carrinho -= carrinho * taxa;
} else if (carrinho >= 1500) {
    carrinho -= carrinho * taxa2;
}

console.log(`O valor do carrinho é ${carrinho}`);
*/

/*
let carrinho = 2001;

if (carrinho != 2000) {
    console.log(`Esse valor é diferente de 2000`);
} else {
    console.log(`Esse valor é igual a ${carrinho}`);
}
*/

let carrinho = [
    "produto 1",
    "produto 2",
    "produto 3",
    "produto 4",
    "produto 5",
    "produto 6"
]

for (let i = 0; i < 10000000**100; i++) {
    if (i == 3000000000) {
        console.log(`Chegou em ${i}. Contagem finalizada!`);
        return;
    }
}
