import { calculateProgress } from "./calculator_hw.js";

const todo1 = {
    title: 'Clean bathroom',
    isCompleted: false
};

const todo2 = {
    title: 'Laundry',
    isCompleted: false
};

const todo3 = {
    title: 'Dishes',
    isCompleted: false
};

const todos = [
    todo1,
    todo2,
    todo3
];

export const initTodos = () => {
    displayTodos();

    updateProgress();
};

const updateProgress = () => {
    document.getElementById('percentage').innerHTML = `${Math.round(calculateProgress(todos) * 100)}%`;
};

const displayTodos = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        todoList.innerHTML += `
            <div class="todo-list-item">
                <input type="checkbox" ${todo.isCompleted ? 'checked' : ''}>
                <span class="${todo.isCompleted ? 'complete' : 'incomplete'}">
                ${todo.title}</span>
            </div>
        `;
    });
    checkboxEventListeners();
};

const checkboxEventListeners = () => {
    document.querySelectorAll('input[type=checkbox]').forEach((checkbox, index) => {
        checkbox.addEventListener('change', () => {
            todos[index].isCompleted = checkbox.checked;
            initTodos();
        });
    });
};