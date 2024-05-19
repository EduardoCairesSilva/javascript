function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
       if (operador === '+') acumulador += numero;
       if (operador === '-') acumulador -= numero;
       if (operador === '/') acumulador /= numero;
       if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador)
}
conta('*', 5, 20, 40, 60, 80)