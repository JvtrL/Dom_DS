(() => { //Proteção do códio.
    const novaTarefa = document.querySelector('[data-form-button]') 

    function criarBotaoDelete() { //Função que cria o botão para deletar tarefa.
        const botaoDelete = document.createElement('span')
        botaoDelete.innerText = "X"
        botaoDelete.classList = "close"

        botaoDelete.addEventListener('click', deletarTarefa)

        return botaoDelete
    }

    function criarBotaoConcluir() { //Função para o botão de criar tarefa.
        const botaoConcluir = document.createElement('input')
        botaoConcluir.setAttribute('type', 'checkbox')
        botaoConcluir.classList = "form-check-input"

        botaoConcluir.addEventListener('click', concluirTarefa)

        return botaoConcluir
    }

    function deletarTarefa(evento) { //Função para deletar uma tarefa da barra.
        const botaoDeleteClicado = evento.target
        const itemDaLista = botaoDeleteClicado.parentElement
        itemDaLista.remove()
    }

    function concluirTarefa(evento) { //Função que conclui a tarefa.
        const botaoConcluirClicado = evento.target
        const itemDaListaConcluido = botaoConcluirClicado.parentElement
        itemDaListaConcluido.classList.toggle('tarefa_concluida')
    }

    function criarTarefa(evento) { //Função para criar uma nova tarefa na lista.
        evento.preventDefault()

        const inputTarefa = document.querySelector('[data-form-input]')
        const valorTarefa = inputTarefa.value
        const listaDeTarefas = document.querySelector('[data-task]')

        novaLabel = document.createElement('label')
        novaLabel.innerText = `- ${valorTarefa}`
        novaLabel.className = "form-check-label"

        novoItem = document.createElement('li')

        novoItem.appendChild(criarBotaoConcluir())
        novoItem.appendChild(novaLabel)
        novoItem.appendChild(criarBotaoDelete())


        listaDeTarefas.appendChild(novoItem)

        inputTarefa.value = ""

    }

    novaTarefa.addEventListener('click', criarTarefa) //Chama a função criarTarefa ao apertar o botão.

})()
