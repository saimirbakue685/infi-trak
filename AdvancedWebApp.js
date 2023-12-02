/* 
Filename: AdvancedWebApp.js

This script demonstrates an advanced web application that allows users to create and manage tasks. It includes features like task creation, deletion, and marking tasks as complete. It uses modern JavaScript techniques like classes, event listeners, and local storage.

Author: John Doe
Date: November 15, 2022
*/

// Task Class
class Task {
  constructor(title, description, completed) {
    this.title = title;
    this.description = description;
    this.completed = completed;
  }
}

// Task Manager Class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(title, description, completed = false) {
    const newTask = new Task(title, description, completed);
    this.tasks.push(newTask);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  toggleTaskCompletion(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}

// UI Class
class UI {
  constructor(taskManager) {
    this.taskManager = taskManager;
  }

  displayTasks() {
    const tasksContainer = document.getElementById("tasks-container");
    tasksContainer.innerHTML = "";

    this.taskManager.tasks.forEach((task, index) => {
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");

      const taskTitle = document.createElement("h3");
      taskTitle.innerText = task.title;

      const taskDescription = document.createElement("p");
      taskDescription.innerText = task.description;

      const taskCompletion = document.createElement("input");
      taskCompletion.setAttribute("type", "checkbox");
      taskCompletion.checked = task.completed;
      taskCompletion.addEventListener("change", () =>
        this.taskManager.toggleTaskCompletion(index)
      );

      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      deleteButton.classList.add("delete-button");
      deleteButton.addEventListener("click", () =>
        this.deleteTask(index)
      );

      taskCard.appendChild(taskTitle);
      taskCard.appendChild(taskDescription);
      taskCard.appendChild(taskCompletion);
      taskCard.appendChild(deleteButton);

      tasksContainer.appendChild(taskCard);
    });
  }

  deleteTask(index) {
    this.taskManager.deleteTask(index);
    this.displayTasks();
  }

  clearForm() {
    document.getElementById("title-input").value = "";
    document.getElementById("description-input").value = "";
    document.getElementById("completed-input").checked = false;
  }

  handleFormSubmit(event) {
    event.preventDefault();

    const titleInput = document.getElementById("title-input");
    const descriptionInput = document.getElementById("description-input");
    const completedInput = document.getElementById("completed-input");

    const title = titleInput.value;
    const description = descriptionInput.value;
    const completed = completedInput.checked;

    this.taskManager.addTask(title, description, completed);
    this.displayTasks();
    this.clearForm();
  }
}

// Create a new Task Manager
const taskManager = new TaskManager();

// Load saved tasks from local storage if available
if (localStorage.getItem("tasks")) {
  taskManager.tasks = JSON.parse(localStorage.getItem("tasks"));
}

// Create a new UI instance
const ui = new UI(taskManager);

// Display tasks initially
ui.displayTasks();

// Register event listener for new task form submission
const taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", (event) => ui.handleFormSubmit(event));

// Save tasks to local storage whenever there is a change
setInterval(() => {
  localStorage.setItem("tasks", JSON.stringify(taskManager.tasks));
}, 5000); // Save every 5 seconds to prevent data loss

// Sample tasks for testing purposes
taskManager.addTask("Task 1", "Test Task 1 Description");
taskManager.addTask("Task 2", "Test Task 2 Description", true);
taskManager.addTask("Task 3", "Test Task 3 Description");

ui.displayTasks();