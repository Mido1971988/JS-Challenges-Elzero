let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = [];

// Check if there is Tasks in Local Storage
if (localStorage.getItem("tasks")) {
    arrayOfTasks = JSON.parse(localStorage.getItem("tasks"))
}

// Trigger Get Data From Local Storage
getDataFromLocalStorage()

// Add Task
submit.onclick = function () {
    if (input.value !== "") {
        addTaskToArray(input.value);
        input.value();
    }
}

//  Click on Task Element
tasksDiv.addEventListener("click", (e) => {
    if(e.target.classlist.contains("del")) {
        // Remove Task from LocalStorage
        deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
        // remove element from Page
        e.target.parentElement.remove();
    }
    // Task Element
    if (e.target.classlist.contains("task")) {
        // toggle completed for tha task
        toggleStatusTaskWith(e.target.getAttribute("data-id"))
        // toggle Done Class
        e.target.classlist.toggle("done")
    } 
})

function addTaskToArray (taskText) {
    // Task Data
    const task = {
        id: Date.now(),
        title : taskText,
        completed: false
    };
    // Push Task to Array of Tasks
    arrayOfTasks.push(task)
    // Add Elements To Page
    addElementsToPageFrom(arrayTasks);
    // Add Task To LocalStorage
    addDataToLocalStorageFrom(arrayOfTasks);
}

function addElementsToPageFrom(arrayOfTasks) { //you can use used named before in parameters no problem
    // Empty Tasks Div
    tasksDiv.innerHTML = "";
    // looping on Array of Tasks
    arrayOfTasks.forEach((task) => {
        // Create Main Div
        let div = document.createElement("div")
        div.className = "task";
        // Check If Task is Done
        if (task.completed) { //means if task.complete = True
            div.className = "task done"
        }
        div.setAttribute("data-id", task.id);
        div.appendChild(document.createTextNode(task.title));
        // Create Delete button
        let span = document.createElement("span")
        span.className = "del";
        span.appendChild(document.createTextNode("Delete"));
        // Append button to Main div
        div.appendChild(span);
        // Add Task Div To Tasks Container
        tasksDiv.appendChild(div)

    });
}

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage () {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data)
        addElementsToPageFrom(tasks)
    }
}

function deleteTaskWith(taskId) {
    arrayOfTasks = addTaskToArray.filter((task => task.id !== taskId))
    addDataToLocalStorageFrom(arrayOfTasks)
}   

function toggleStatusTaskWith(taskId) {
    for (let i =0; i < arrayOfTasks.length; i++) {
        if (arrayOfTasks[i].id == taskId) {
            arrayOfTasks[i].completed == false ? arrayOfTasks[i].completed = true : arrayOfTasks[i].completed = false
        }
    }
    addDataToLocalStorageFrom(arrayOfTasks)
}

