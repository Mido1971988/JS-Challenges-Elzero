let form = document.querySelector(".form");
let input = document.querySelector(".input")
let add = document.querySelector(".add");
let tasks = document.querySelector(".tasks")
let i = 1;

add.onclick = function() {
    if ( input.value === "") {
        console.log("Write Your Task")
    } else {
        let newTask = document.createElement("div");
        let newPara = document.createElement("para");
        let newBtn = document.createElement("btn");
        let newInput = document.querySelector(".input").value;
        if (localStorage.getItem('tasks') === null) {
            localStorage.setItem('tasks', '[]')
        }
        newTask.className = "task";
        newPara.className = "para";
        newBtn.className = "btn";
        newPara.append(newInput)
        newTask.append(newPara, newBtn);
        tasks.append(newTask);
        newBtn.onclick = function() {
            i-- 
            newTask.style.display = "none"
            window.localStorage.setItem("clickCount", (i - 1 ) )
            oldData.splice(1, 1)
            console.log(oldData)
            localStorage.setItem('tasks', JSON.stringify(oldData))
        }
        let oldData = JSON.parse(localStorage.getItem('tasks'))
        oldData.push(newInput)
        console.log(oldData)
        localStorage.setItem('tasks', JSON.stringify(oldData))
        window.localStorage.setItem("clickCount", i )
        i++

    }
};



window.onload = function() {
    for( let num = 1; num <= window.localStorage.getItem("clickCount"); num++ ) {
        let newTask = document.createElement("div");
        let newPara = document.createElement("para");
        let newBtn = document.createElement("btn");
        let newInput = document.createTextNode(`${window.localStorage.getItem(`newTask-${num}`)}`)
        newTask.className = "task";
        newPara.className = "para";
        newBtn.className = "btn";
        newPara.append(newInput)
        newTask.append(newPara, newBtn);
        tasks.append(newTask);
        newBtn.onclick = function() {
            let count = window.localStorage.getItem("clickCount"); 
            newTask.style.display = "none"
            window.localStorage.setItem("clickCount", (count- 1 ) )
            window.localStorage.removeItem(`newTask-${count}`)
        }
    }
}








// window.localStorage.clear()


