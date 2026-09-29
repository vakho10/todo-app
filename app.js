const inputTask = document.querySelector('#input');
const btnAdd = document.querySelector('#add');
const taskList = document.querySelector('#list');

// Add new item to the list
btnAdd.addEventListener('click', () => {
    const task = inputTask.value;
    if (task.trim()) {
        addTask(task);
    }
});

// Add demo tasks
addTask('Buy groceries');
addTask('Go to the gym');
addTask('Read a book');
addTask('Do laundry');

function addTask(task) {
    const span = document.createElement('span');
    span.textContent = task;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const btnRemove = document.createElement('button');
    btnRemove.textContent = 'X';
    btnRemove.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    const div = document.createElement('div');
    div.append(span, checkbox, btnRemove);

    const li = document.createElement('li');
    li.appendChild(div);

    taskList.appendChild(li);
    input.value = '';
}