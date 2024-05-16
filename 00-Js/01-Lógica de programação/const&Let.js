const nome = "Eduardo";
const sobrenome = "Caires";
const idade = 20;
const peso = 78;
const altura = 1.76;
let imc = peso / (altura**2);
let anoNascimento = 2024 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)
