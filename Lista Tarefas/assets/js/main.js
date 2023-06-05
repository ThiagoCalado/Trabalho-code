const novaTarefa = document.querySelector('.input-nova-tarefa');
const btnAddTarefa = document.querySelector('.btn-add-tarefa');
const tarefas = document.querySelector('.tarefas');

//ciar <li>
function criarLi(){
    const li = document.createElement('li');
    return li;
}

//habilita o enter
novaTarefa.addEventListener('keypress', (e) =>{
    if(e.keyCode === 13){
        if(!novaTarefa.value) return;
        criaTarefa(novaTarefa.value);
    }
})


// limpa input
function limpaInput(){
    novaTarefa.value = '';
    novaTarefa.focus();
}


btnAddTarefa.addEventListener('click', (e) =>{
    if(!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
})

function criaTarefa(textoInput){
    const li = criarLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
}