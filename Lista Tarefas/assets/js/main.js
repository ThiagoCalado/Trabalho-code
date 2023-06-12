const novaTarefa = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

//ciar <li>
function criarLi() {
    const li = document.createElement('li');
    return li;
}

//habilita o enter
novaTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        if (!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
    }
})


// limpa input
function limpaInput() {
    novaTarefa.value = '';
    novaTarefa.focus();
}

//cria botão apagar
function btnApagar(li) {
    li.innerText += '';
    const apagar = document.createElement('button');
    apagar.innerText = 'Apagar';
    apagar.setAttribute('class', 'apagar');
    li.appendChild(apagar);
}

btnAddTarefa.addEventListener('click', (e) => {
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);

})


// criar tarefa
function criaTarefa(textoInput) {
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    btnApagar(li);
    salvarTarefas();
}

//botão apagar funcionando
document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas()
    }
    
});

//salvar a lista no JSON
function salvarTarefas(){
    const liTarefa = tarefas.querySelectorAll('li');
    const listaTarefa = [];

    for(let tarefa of liTarefa){
        let tarefaTexto = tarefa.innerText;

        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefa.push(tarefaTexto);
    }

    //criar JSON

    const tarefaJSON = JSON.stringify(listaTarefa);
    localStorage.setItem('tarefas', tarefaJSON);
}

//chamar tarefas

function pegarTarefaSalva(){
    const tarefas = localStorage.getItem('tarefas');
    const listaTarefa = JSON.parse(tarefas);
    
    for(let tarefa of listaTarefa){
        criaTarefa(tarefa);

    }
}

pegarTarefaSalva()