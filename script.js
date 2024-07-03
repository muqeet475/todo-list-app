document.addEventListener('DOMContentLoaded', function() {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const task = taskInput.value.trim();

    if (task) {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
            saveTasks();
        };

        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = '';

        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById('task-list');
    const tasks = [];

    for (let i = 0; i < taskList.children.length; i++) {
        tasks.push(taskList.children[i].firstChild.textContent);
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (tasks) {
        const taskList = document.getElementById('task-list');

        tasks.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');
            deleteButton.onclick = function() {
                taskList.removeChild(listItem);
                saveTasks();
            };

            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
    }
}
