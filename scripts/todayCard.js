//! eventHandlers
let todayFormEventHandler = event => {
  event.preventDefault();
  createNewTask(event);
};
let xButtonEventHandler = event => {
  event.preventDefault();
  console.log(event.target.id);
};

let createNewTask = event => {
  console.log(event.target[0].value);

  let newTodayItem = document.createElement("li");
  newTodayItem.setAttribute("id", `${(taskIdNum += 1)}`);
  let newTodayP = document.createElement("p");
  let newTodayButton = document.createElement("button");
  newTodayButton.setAttribute("class", "completed");
  newTodayP.appendChild(document.createTextNode(event.target[0].value));
  newTodayButton.appendChild(document.createTextNode("X"));
  newTodayItem.appendChild(newTodayP);
  newTodayItem.appendChild(newTodayButton);
  listOfToday.appendChild(newTodayItem);
};

//! querySelectors
let todaysForm = document.querySelector("#todaysForm");
let listOfToday = document.querySelector("#listOfToday");
let todayTodoList = document.querySelector("#todayTodoList");
// let completedButton = document.querySelector()
//! eventListeners
todaysForm.addEventListener("submit", todayFormEventHandler);
listOfToday.addEventListener("click", xButtonEventHandler);

// Global Variables
let taskIdNum = 0;
