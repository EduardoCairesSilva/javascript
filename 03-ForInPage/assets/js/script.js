const elements = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for(let i = 0; i < elements.length; i++) {
    const { tag, texto } = elements[i];
    const adicionaTag = document.createElement(tag);
    adicionaTag.innerHTML = texto;
    div.appendChild(adicionaTag);
}

container.appendChild(div);
