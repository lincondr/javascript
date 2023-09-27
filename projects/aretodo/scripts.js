const sendBtn = document.querySelector('#sendBtn')
const clearBtn = document.querySelector('#clearBtn')
const sendEdit = document.querySelector('#send-edit')
const tdInput = document.querySelector('#input-todo')
const list = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
const editInput = document.querySelector('#edit-form')
const cancelEditBtn = document.querySelector('#cancelBtn')
let editValue = document.querySelector('#edit-todo')
let oldInput;

// functions

const saveTodo = (text) => {
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement('button')
    doneBtn.classList.add('button', 'doneBtn')
    doneBtn.innerText = 'DONE';
    todo.appendChild(doneBtn)

    const editBtn = document.createElement('button')
    editBtn.classList.add('button', 'editBtn')
    editBtn.innerText = 'EDIT';
    todo.appendChild(editBtn)

    const removBtn = document.createElement('button')
    removBtn.classList.add('button', 'removeBtn')
    removBtn.innerText = 'REMOVE';
    todo.appendChild(removBtn)

    list.appendChild(todo) 
}

const toggleForms = () => {
    editInput.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    list.classList.toggle('hide')
}

const updateTodo = (text) => {

    let todos = document.querySelectorAll('.todo')
    
    todos.forEach((todo) => {
       let todoTitle =  todo.querySelector('h3')

       if(todoTitle.innerText === oldInput) {
        todoTitle.innerText = text;
       }
    })
}

// Events

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const todoValue = tdInput.value

    if (todoValue) {
        saveTodo(todoValue)
    }

    tdInput.focus()
    tdInput.value = ''
})


document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest('div')
    let todoTitle;

    if(targetEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText
    }

    if(targetEl.classList.contains('doneBtn')) {
        parentEl.classList.toggle('done')
    }

    if(targetEl.classList.contains('removeBtn')) {
        parentEl.remove()
    }

    if(targetEl.classList.contains('editBtn')) {
        toggleForms()

        editValue.value = todoTitle
        oldInput = todoTitle
    }

    
})

cancelEditBtn.addEventListener('click', (e) => {
    e.preventDefault();

    toggleForms();
})

sendEdit.addEventListener('click', (e) => {
    e.preventDefault();

    const editNewValue = editValue.value;
    if(editNewValue) {
        updateTodo(editNewValue);
    }

    toggleForms();
})

