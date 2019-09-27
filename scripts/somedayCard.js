//! eventHandlers
//This function is called when new task is submitted
let somedayFormEventHandler = event => {
  event.preventDefault();
  createNewSomedayTask(event);
  somedayForm.reset();
};
//this function will run it's if statement when the finished button is clicked
let somedayTodoCompletedEventHandler = event => {
  event.preventDefault();
  if (event.target.id === `button${event.target.parentNode.id}`) {
    // console.log(completedList);
    somedayTasks.splice(event.target.parentNode.id, 1);
    displayTasks();
  }
};

//! General Functions
//This function creates a new object, and shoves it into the todaysTasks array
let createNewSomedayTask = event => {
  console.log(event.target[1].value);
  let newTask = {
    task: event.target[0].value,
    date: `${reverseDateInput(event.target[1].value)}`
  };
  console.log(newTask);
  somedayTasks.push(newTask);
  displayTasks();
};

//This function resets the holder div's content, and displays the content of todaysTasks
function displayTasks() {
  somedayTodoList.innerHTML = "";
  for (let i = 0; i < somedayTasks.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="task" id="${i}">
    <p> ${somedayTasks[i].task}</p>
    <p> ${somedayTasks[i].date}</p>
    <button id="button${i}" class="todoButton">Done?</button>
    </div>
    `;
    somedayTodoList.append(div);
  }
}
function reverseDateInput(str) {
  return str
    .split("/")
    .reverse()
    .join("/");
}
//! querySelectors
let somedayForm = document.querySelector("#somedayForm");
let listOfSomeday = document.querySelector("#listOfSomeday");
let somedayTodoList = document.querySelector("#somedayTodoList");
// let completedButton = document.querySelector()
//! eventListeners
somedayForm.addEventListener("submit", somedayFormEventHandler);
somedayTodoList.addEventListener("click", somedayTodoCompletedEventHandler);

//! Global Variables
let somedayTasks = [];
// let completedList = [];
