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
    //Criando div que vai conter todos os elementos 
    const todo = document.createElement("div")
    todo.classList.add("todo")

    //Criando titulo da tarefa
    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text
    todo.appendChild(todoTitle)

    console.log(todo)
    //Criando botão de finalizar tarefa
    const finishTodoBtn = document.createElement('button')
    finishTodoBtn.classList.add('finish-todo')
    finishTodoBtn.innerHTML='<i class="fa-solid fa-check"></i>'
    todo.appendChild(finishTodoBtn)

    //Criando botão de editar tarefa
    const editTodoBtn = document.createElement('button')
    editTodoBtn.classList.add('edit-todo')
    editTodoBtn.innerHTML='<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editTodoBtn)

    //Criando botão de deletar tarefa
    const removeTodoBtn = document.createElement('button')
    removeTodoBtn.classList.add('remove-todo')
    removeTodoBtn.innerHTML='<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(removeTodoBtn)

    //Colocando div com todos os elementos na div principal no html
    todoList.appendChild(todo)
    
    //Limpar a caixa de input a depois da adição
    todoInput.value= " "
    //Focar o cursor no input para nova digitação 
    todoInput.focus()
    
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