//let button é o botão de adicionar a tarefa
let button = document.querySelector('.botao-adicionar-tarefa')
//let inputTr é o campo aonde é escrito a tarefa para inclusão
let inputTr = document.querySelector('.input-tarefa')
let listacompleta = document.querySelector ('.listatarefas')

// criar variavel de lista vazia
let minhaLista = []

//
function AdicionarTarefa(){
    minhaLista.push({
        tarefa : inputTr.value,
        concluida: false
    })
    
    // para limpar os valores 
    inputTr.value = ''
    mostrarTarefas()
}

function mostrarTarefas(){
    //criar novalista vazia
    let novali = ''
    //para criar a lista com os icones de deletar e concluir e não subscrever
    minhaLista.forEach((item, posicao) => {
        novali = novali + ` 

          <li class="lista ${item.concluida && "done"}"> 
                <svg id="check" alt="icone-de-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-bookmark-check-fill" viewBox="0 0 16 16" onclick="concluirTarefa(${posicao})">
                    <path fill-rule="evenodd"
                        d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z" />
                </svg>
                <p>${item.tarefa}</p>
                <svg id="lixeira" alt="icone-de-lixeira" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-trash3-fill" viewBox="0 0 16 16" onclick="deletarItem(${posicao})">
                    <path
                        d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                </svg>
            </li>
        `
    })

    listacompleta.innerHTML = novali 
    localStorage.setItem('lista', JSON.stringify(minhaLista))
}

//Para inverter o valor de concluida, antes era falso, agora vai ser verdadeiro
function concluirTarefa(posicao){
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida
    mostrarTarefas()
}

//deletar item
function deletarItem(posicao){
    //o splice deleta o que quiser dentro do array, neste caso apenas um item da posicao
    minhaLista.splice(posicao, 1)
    mostrarTarefas()
}

//para utilizar o local storage e ao atualizar a tela deixar os itens
function recarregarItens(){
    let tarefasLocalStorage = localStorage.getItem('lista')
    minhaLista = JSON.parse(tarefasLocalStorage)
    mostrarTarefas()

}

recarregarItens();
button.addEventListener('click', AdicionarTarefa)