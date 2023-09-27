const sendBtn = document.querySelector('#sendBtn');
const sendEdit = document.querySelector('#send-edit');
const todoInput = document.querySelector('#input-todo');
const todoForm = document.querySelector('#todo-form');
const editInput= document.querySelector('#edit-todo');
const editForm = document.querySelector('#edit-form');
const list = document.querySelector('#todo-list');
const clearBtn = document.querySelector('#clearBtn')
let oldInputValue;

const saveTodo = (text) => {
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const todoTitle = document.createElement('h3')
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const editBtn = document.createElement('button')
    editBtn.classList.add('removeBtn', 'button')
    editBtn.innerText = 'EDIT'
    todo.appendChild(editBtn)

    const removeBtn = document.createElement('button')
    removeBtn.classList.add('removeBtn', 'button')
    removeBtn.innerText = 'REMOVE'
    todo.appendChild(removeBtn)
    
    list.appendChild(todo)
}

const toggleForms = () => {
    list.classList.toggle('hide')
    todoForm.classList.toggle('hide')
    editForm.classList.toggle('hide')
}

const changePhrase = (editNewValue) => {

    let todos = document.querySelectorAll('.todo')

    todos.forEach((todo) => {
       let todoTitle = todo.querySelector('h3');

       if(todoTitle.innerText === oldInputValue) {
        todoTitle.innerText = editNewValue;

       }
    });
}

document.addEventListener('click', (e) => {
    const targetEl = e.target
    const parentEl = targetEl.closest('div')
    let todoTitle;

    if(targetEl && parentEl.querySelector('h3')) {
        todoTitle = parentEl.querySelector('h3').innerText;
    }

    if (targetEl.classList.contains('editBtn')) {
        toggleForms();

        oldInputValue = todoTitle;
        editInput.value = todoTitle;
    }
})

sendEdit.addEventListener('click', (e) => {
    e.preventDefault();
    let editNewValue = editInput.value;
    console.log(editNewValue)
    if(editNewValue) {
        changePhrase(editNewValue)
    }

    toggleForms();
})

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoValue = todoInput.value;

    if(todoValue) {
        saveTodo(todoValue)
    }
})

clearBtn.addEventListener('click', () => {

    todoInput.value = ''
    todoInput.focus()
})