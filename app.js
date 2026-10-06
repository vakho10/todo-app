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
        e.target.parentElement.parentElement.remove();
    });

    const div = document.createElement('div');
    div.append(span, checkbox, btnRemove);

    const li = document.createElement('li');
    li.draggable = true; // make tasks draggable
    li.appendChild(div);

    taskList.appendChild(li);
    inputTask.value = '';
}

taskList.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'move';
    // Apply the class one frame later so the drag "ghost"
    // snapshots the normal look instead of the placeholder
    requestAnimationFrame(() => e.target.closest('li').classList.add('dragging'));
});

taskList.addEventListener('dragover', (e) => {
    e.preventDefault(); // required to allow dropping
    e.dataTransfer.dropEffect = 'move';

    const dragging = taskList.querySelector('.dragging');
    if (!dragging) return;

    const nextTask = getTaskAfterCursor(e.clientY);
    if (nextTask == null) {
        taskList.appendChild(dragging);            // cursor is below the last task
    } else {
        taskList.insertBefore(dragging, nextTask); // insert before it
    }
});

// Firefox needs an explicit drop handler to not cancel the action
taskList.addEventListener('drop', (e) => e.preventDefault());

taskList.addEventListener('dragend', () => {
    taskList.querySelector('.dragging')?.classList.remove('dragging');
});

// Returns the first task whose vertical midpoint is below the cursor
function getTaskAfterCursor(y) {
    const tasks = [...taskList.querySelectorAll('li:not(.dragging)')];

    return tasks.reduce((closest, task) => {
        const box = task.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        return offset < 0 && offset > closest.offset
            ? {offset, task}
            : closest;
    }, {offset: -Infinity}).task;
}