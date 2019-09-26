//! eventHandlers
//This function is called when new task is submitted
let todayFormEventHandler = event => {
  event.preventDefault();
  createNewTask(event);
  todaysForm.reset();
};
//this function will run it's if statement when the finished button is clicked
let xButtonEventHandler = event => {
  event.preventDefault();
  if (event.target.id === `button${event.target.parentNode.id}`) {
    todaysTasks.splice(event.target.parentNode.id, 1);
    displayTasks();
  }
};

//! General Functions
//This function creates a new object, and shoves it into the todaysTasks array
let createNewTask = event => {
  let newTask = {
    task: event.target[0].value
  };
  todaysTasks.push(newTask);
  displayTasks();
};

//This function resets the holder div's content, and displays the content of todaysTasks
function displayTasks() {
  todayTodoList.innerHTML = "";
  for (let i = 0; i < todaysTasks.length; i++) {
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
//! eventListeners
todaysForm.addEventListener("submit", todayFormEventHandler);
todayTodoList.addEventListener("click", xButtonEventHandler);

//! Global Variables
let todaysTasks = [];
