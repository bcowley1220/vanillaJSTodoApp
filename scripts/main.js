//! The section below contains ListsCard, NavBar, Date, CompletedList:
//! eventHandlers
let newListFormEventHandler = event => {
  event.preventDefault();
  console.log(event.target[0].value);
  let newListItem = document.createElement("li");
  let newListP = document.createElement("p");
  newListP.appendChild(document.createTextNode(event.target[0].value));
  newListItem.appendChild(newListP);
  listOfLists.appendChild(newListItem);
};
let navBarEventHandler = event => {
  console.log(event.target);
  if (event.target.id === "now") {
    nowCard.style.visibility = "visible";
    soonCard.style.visibility = "hidden";
    laterCard.style.visibility = "hidden";
    completedCard.style.visibility = "hidden";
  } else if (event.target.id === "soon") {
    nowCard.style.visibility = "hidden";
    soonCard.style.visibility = "visible";
    laterCard.style.visibility = "hidden";
    completedCard.style.visibility = "hidden";
  } else if (event.target.id === "later") {
    nowCard.style.visibility = "hidden";
    soonCard.style.visibility = "hidden";
    laterCard.style.visibility = "visible";
    completedCard.style.visibility = "hidden";
  } else if (event.target.id === "done") {
    nowCard.style.visibility = "hidden";
    soonCard.style.visibility = "hidden";
    laterCard.style.visibility = "hidden";
    completedCard.style.visibility = "visible";
    displayCompletedTasks();
  }
};
function displayCompletedTasks() {
  completedList.innerHTML = "";
  for (let i = 0; i < completedTaskList.length; i++) {
    // console.log(todaysTasks[i]);
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="task" id="${i}">
    <p>Todo: ${completedTaskList[i].task}</p>
    <p>Date: ${completedTaskList[i].month} ${completedTaskList[i].day}</p>
    </div>
    `;
    completedList.append(div);
  }
}

//! querySelectors
let newListForm = document.querySelector("#newListForm");
let listOfLists = document.querySelector("#listOfLists");
let header = document.querySelector("#headBar");
let nowCard = document.querySelector("#todayCard");
let soonCard = document.querySelector("#tomorrowCard");
let laterCard = document.querySelector("#somedayCard");
let completedCard = document.querySelector("#completedCard");
let completedList = document.querySelector("#completedList");

//! eventListeners
newListForm.addEventListener("submit", newListFormEventHandler);
header.addEventListener("click", navBarEventHandler);

//! Global Variable
let completedTaskList = [];
let todaysTasks = [];
let tomorrowTasks = [];
let somedayTasks = [];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

//////////////////////////////////////////////////////////
//! The section below contains all of TodayCard Functions
//////////////////////////////////////////////////////////
//! eventHandlers
//This function is called when new task is submitted
let todayFormEventHandler = event => {
  event.preventDefault();
  createNewTask(event);
  console.log(todaysTasks);

  todaysForm.reset();
};
//this function will run it's if statement when the finished button is clicked
let xButtonEventHandler = event => {
  event.preventDefault();
  if (event.target.id === `button${event.target.parentNode.id}`) {
    // console.log(completedList);
    completedTaskList.push(todaysTasks[event.target.parentNode.id]);
    console.log(completedTaskList);
    todaysTasks.splice(event.target.parentNode.id, 1);
    displayTodayTasks();
  }
};
//! General Functions
//This function creates a new object, and shoves it into the todaysTasks array
let createNewTask = event => {
  let now = new Date();
  let nowMonth = Number(`${now.getMonth()}`);
  // console.log(nowMonth);
  console.log(monthNumberToString(nowMonth));
  monthNumberToString(nowMonth);
  console.log(nowMonth);
  let newTask = {
    task: event.target[0].value,
    month: `${monthNumberToString(nowMonth)}`,
    day: `${now.getDate()}`,
    year: `${now.getFullYear()}`
    // date: `${monthNumberToString(Number(now.getMonth()) + 1)}`
  };
  // monthNumberToString(newTask);
  todaysTasks.push(newTask);
  displayTodayTasks();
};
let monthNumberToString = x => {
  for (let i = 0; i < months.length; i++) {
    if (i == x) {
      x = months[i];
      console.log(x);
      return x;
    } else {
      console.log("nomatch");
    }
  }
};
//This function resets the holder div's content, and displays the content of todaysTasks
function displayTodayTasks() {
  todayTodoList.innerHTML = "";
  for (let i = 0; i < todaysTasks.length; i++) {
    // console.log(todaysTasks[i]);
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="task" id="${i}">
    <p>Todo: ${todaysTasks[i].task}</p>
    <button id="button${i}" class="todoButton">X</button>
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

//////////////////////////////////////////////////////////
//! The section below contains all of TomorrowCard Functions
//////////////////////////////////////////////////////////

//! eventHandlers
//This function is called when new task is submitted
let tomorrowFormEventHandler = event => {
  console.log(event);
  event.preventDefault();
  createNewTomorrowTask(event);
  tomorrowForm.reset();
};

//this function will run it's if statement when the finished button is clicked
let tomorrowTodoCompletedEventHandler = event => {
  event.preventDefault();
  console.log("tomorrowtodo has been fired");
  if (event.target.id === `button${event.target.parentNode.id}`) {
    completedTaskList.push(tomorrowTasks[event.target.parentNode.id]);
    tomorrowTasks.splice(event.target.parentNode.id, 1);
    displayTomorrowsTasks();
  }
};

//! General Functions
//This function creates a new object, and shoves it into the todaysTasks array
let createNewTomorrowTask = event => {
  let tomorrowDate = new Date();
  let newTask = {
    task: event.target[0].value,
    date: `${tomorrowDate.setDate(tomorrowDate.getDate() + 1)}`
  };
  console.log(newTask);
  tomorrowTasks.push(newTask);
  displayTomorrowsTasks();
};

//This function resets the holder div's content, and displays the content of todaysTasks
function displayTomorrowsTasks() {
  tomorrowTodoList.innerHTML = "";
  for (let i = 0; i < tomorrowTasks.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="task" id="${i}">
    <p>Todo: ${tomorrowTasks[i].task}</p>
    <button id="button${i}" class="todoButton">Done?</button>
    </div>
    `;
    tomorrowTodoList.append(div);
  }
}

//! querySelectors
let tomorrowForm = document.querySelector("#tomorrowForm");
let tomorrowCard = document.querySelector("#tomorrowCard");
let listOfTomorrow = document.querySelector("#listOfTomorrow");
let tomorrowTodoList = document.querySelector("#tomorrowTodoList");
//! eventListeners
tomorrowForm.addEventListener("submit", tomorrowFormEventHandler);
tomorrowTodoList.addEventListener("click", tomorrowTodoCompletedEventHandler);

//////////////////////////////////////////////////////////
//! The section below contains all of SomedayCard Functions
//////////////////////////////////////////////////////////

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
    completedTaskList.push(somedayTasks[event.target.parentNode.id]);
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
//! eventListeners
somedayForm.addEventListener("submit", somedayFormEventHandler);
somedayTodoList.addEventListener("click", somedayTodoCompletedEventHandler);
