// setTimeout

// console.log("Antes do setTimeout");

// setTimeout(function () {

//     console.log("Antes do for");

//     for (let index = 0; index < 10000; index++) { }

//     console.log("Depois do for");

// }, 5000);

// clearTimeout();

// console.log("Depois do setTimeout");
// ========================================

console.log("============================================================")

// setInterval

let contador = 1

let interval = setInterval(function () {
    console.log(contador++);

    if (contador === 11) {
        clearInterval(interval);
    }

}, 1000)
