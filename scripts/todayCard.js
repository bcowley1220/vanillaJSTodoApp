//! eventHandlers
let todayFormEventHandler = event => {
  event.preventDefault();
  createNewTask(event);
  todaysForm.reset();
};
let xButtonEventHandler = event => {
  event.preventDefault();
  console.log(event.target.id);
  console.log(`button${event.target.parentNode.id}`);
  if (event.target.id === `button${event.target.parentNode.id}`) {
    console.log("this shit is working");
    todaysTasks.splice(event.target.parentNode.id, 1);
    displayTasks();
  }
};

let createNewTask = event => {
  console.log(event.target[0].value);
  let newTask = {
    task: event.target[0].value
  };
  todaysTasks.push(newTask);
  console.log(todaysTasks);
  displayTasks();
};

function displayTasks() {
  todayTodoList.innerHTML = "";
  for (let i = 0; i < todaysTasks.length; i++) {
    console.log(todaysTasks[i].task);
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="task" id="${i}">
    <p>Task: ${todaysTasks[i].task}</p>
    <p>Index: ${i}</p>
    <button id="button${i}">Finished</button>
    </div>
    `;
    todayTodoList.append(div);
  }
}

//! querySelectors
let todaysForm = document.querySelector("#todaysForm");
let listOfToday = document.querySelector("#listOfToday");
let todayTodoList = document.querySelector("#todayTodoList");
// let completedButton = document.querySelector()
//! eventListeners
todaysForm.addEventListener("submit", todayFormEventHandler);
todayTodoList.addEventListener("click", xButtonEventHandler);

// Global Variables
let taskIdNum = 0;
let todaysTasks = [];
