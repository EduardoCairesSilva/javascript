// Este exercicio é um resumo do XMLHttpRequest + Promise que poderá ser encontrado dentro de 00/JS -> 00-Exercicios -> 12-XMLHttpRequest+Promise!!!
// Verificar informação acima no github: https://github.com/EduardoCairesSilva/javascript/tree/main/00-Js/00-Exercicios/12-XMLHttpRequest%2BPromise
// Autor desse código: https://github.com/EduardoCairesSilva

/* fetch('Página1.html')
    .then(resposta => {
        if (resposta.status !== 200) throw new Error('ERROR 404');
        return resposta.text();
    })
    .then(html => console.log(html))
    .catch(e => console.error(e)); */

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        loadPage(el);
    };
});

async function loadPage(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('ERROR 404');

        const html = await response.text();
        loadResult(html);
    } catch (e) {
        console.error(e);
    };

    // fetch(href)
    //     .then(resposta => {
    //         if (resposta.status !== 200) throw new Error('ERROR 404');
    //         return resposta.text();
    //     })
    //     .then(html => loadResult(html))
    //     .catch(e => console.error(e));
};

function loadResult(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response;
}
