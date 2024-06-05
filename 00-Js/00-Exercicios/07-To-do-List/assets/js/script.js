const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
};

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
};

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(btnApagar);
};

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
};

inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

btnTarefa.addEventListener('click', () => {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    };
});

function salvarTarefa () {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
};

function adicionaTarefasSalvas () {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
