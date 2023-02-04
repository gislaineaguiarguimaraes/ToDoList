//Seleção de Elementos
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')
const editForm = document.querySelector('#edit-form')
const editInput = document.querySelector('#edit-input')
const todoList = document.querySelector('#todo-list')
const cancelEditBtn = document.querySelector('#cancel-edit-btn')
//Funções

//Quando a função for chamada, vai ser criado os elementos
const saveTodo = (text) => {
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)
}


//Eventos

//Criando evento no formulario para add de nova tarefa 
todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value

    //Se foi digitado algo, chama função para salvar a nova tarefa (evita de salvar campos vazios)
    if(inputValue) {
        saveTodo(inputValue)
    }
})