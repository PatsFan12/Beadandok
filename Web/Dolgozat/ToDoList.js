class ToDoList {
    constructor () {
        this.tasks = [];
    }
 
    addTask(task){
        this.tasks.push({ name: task, completed: false});
        this.renderTasks();
    }
 
    removeTask(index){
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
            this.renderTasks();
        } else {
            console.error("invalid index.");
        }
    }
 
    completeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].completed = !this.tasks[index].completed;
            this.renderTasks();
        } else {
            console.error("invalid index.");
        }
    }
 
    renderTasks() {
        const taskList = document.getElementById("taskList");
        taskList.innerHTML = ""; // Clearing existing list
 
        this.tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("dropdown-item");
            listItem.innerText = `${index + 1}. ${task.name} - ${task.completed ? 'Kész' : 'Folyamatban'}`;
            if (task.completed) {
                listItem.classList.add("completed");
                listItem.addEventListener('click', () => {
                    this.removeTask(index);
                });
            } else {
                listItem.addEventListener('click', () => {
                    this.completeTask(index);
                });
            }
            taskList.appendChild(listItem);
        });
    }
}
 
document.addEventListener('DOMContentLoaded', function(){
    const todoList = new ToDoList();
 
    document.getElementById("HozzaAd").addEventListener('click', function() {
        const taskInput = document.getElementById("taskInput");
        const newTask = taskInput.value;
        if (newTask.trim() !== "") {
            todoList.addTask(newTask);
            taskInput.value = "";
        }
    });
 
    document.getElementById("taskList").addEventListener('click', function(event) {
        if (event.target.classList.contains("dropdown-item")) {
            const taskIndex = Array.from(event.target.parentNode.children).indexOf(event.target);
            if (!event.target.classList.contains("completed")) {
                todoList.completeTask(taskIndex);
            } else {
                todoList.removeTask(taskIndex);
            }
        }
    });
});