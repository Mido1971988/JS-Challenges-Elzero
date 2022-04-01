let input = document.querySelector(".input");
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let arrTasks = [];
let oldTasks = JSON.parse(window.localStorage.getItem("Tasks"));
if (oldTasks) {
    arrTasks = oldTasks;
    oldTask();
}
add.addEventListener("click", newTask);
let btn = document.querySelectorAll(".btn");
let arrBtn = Array.from(btn);
triggerDel();

function clearInput() {
    input.value = "";
}

function oldTask() {
    for (let i = 0; i < oldTasks.length; i++) {
        let task = document.createElement("div");
        let btn = document.createElement("button");
        let para = document.createElement("p");
        task.classList.add("task");
        btn.classList.add("btn");
        para.classList.add("para");
        para.appendChild(document.createTextNode(oldTasks[i].value));
        task.append(para, btn);
        tasks.appendChild(task);
    }
}

function newTask() {
    let task = document.createElement("div");
    let btn = document.createElement("button");
    let para = document.createElement("p");
    let tasksObj = { Title: "Task", value: "" };
    task.classList.add("task");
    btn.classList.add("btn");
    para.classList.add("para");
    para.appendChild(document.createTextNode(input.value));
    task.append(para, btn);
    tasks.appendChild(task);
    tasksObj.value = input.value;
    arrTasks.push(tasksObj);
    window.localStorage.setItem("Tasks", JSON.stringify(arrTasks));
    update();
    clearInput();
    triggerDel();
}

function triggerDel() {
    for (let i = 0; i < arrBtn.length; i++) {
        btn[i].addEventListener("click", delLocal);
    }
}

function update() {
    btn = document.querySelectorAll(".btn");
    arrBtn = Array.from(btn);
}
function delLocal(el) {
    let badEl = el.currentTarget.parentElement;
    badEl.remove();
    arrTasks.splice(arrBtn.indexOf(el.currentTarget), 1);
    window.localStorage.setItem("Tasks", JSON.stringify(arrTasks));
    update();
}


