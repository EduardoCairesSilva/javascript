function random(max, min) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

const min = 1;
const max = 99;
let rand = random(min, max);

while (rand !== 76) {
    rand = random(min, max);
}

// do {
//     console.log(rand);
// } while (rand !== 76);

console.log(`Parabéns, você chegou no número ${rand}`)

