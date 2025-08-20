


const addtask = document.getElementById("add-task");
const taskcontainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

addtask.addEventListener('click', function(){

    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerText = '+';
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);
    
    let deleteButton = document.createElement("button");
    deleteButton.innerText = '<i class="fa-solid fa-trash-can"></i>';
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);
})
