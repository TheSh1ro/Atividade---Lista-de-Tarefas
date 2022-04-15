let tarefa = []

function handleSend(inputElement) {
    tarefa.push(inputElement.value)
    makeUL() // Renderiza a UL
}

function makeUL() {
    const list = document.getElementById('list-group')
    list.innerHTML = '' // Apaga todos os elementos contidos na UL (reset)
    
    for (index in tarefa) {
        const newLI = document.createElement('li')
        newLI.innerText = tarefa[index]
        newLI.setAttribute('id', 'item'+index)
        list.appendChild(newLI)
        list.lastElementChild.addEventListener("click", function(event){removeItem(event)})
    }
}

function removeItem(event) {
    const item = event.target
    const arrayIndex = item.id.slice(4)
    tarefa.splice(arrayIndex, 1) // Remove o LI clicado e apaga o valor do mesmo dentro do array 'tarefa'
    makeUL() // Renderiza a UL
}