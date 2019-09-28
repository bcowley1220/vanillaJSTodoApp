// //! eventHandlers
// //This function is called when new task is submitted
// let tomorrowFormEventHandler = event => {
//   // console.log("tomorrowform has been clicked");
//   console.log(event);
//   event.preventDefault();
//   createNewTomorrowTask(event);
//   tomorrowForm.reset();
// };

// //this function will run it's if statement when the finished button is clicked
// let tomorrowTodoCompletedEventHandler = event => {
//   event.preventDefault();
//   console.log("tomorrowtodo has been fired");
//   if (event.target.id === `button${event.target.parentNode.id}`) {
//     // console.log(completedList);
//     tomorrowTasks.splice(event.target.parentNode.id, 1);
//     displayTomorrowsTasks();
//   }
// };

// //! General Functions
// //This function creates a new object, and shoves it into the todaysTasks array
// let createNewTomorrowTask = event => {
//   let tomorrowDate = new Date();
//   let newTask = {
//     task: event.target[0].value,
//     date: `${tomorrowDate.setDate(tomorrowDate.getDate() + 1)}`
//   };
//   console.log(newTask);
//   tomorrowTasks.push(newTask);
//   displayTomorrowsTasks();
// };

// //This function resets the holder div's content, and displays the content of todaysTasks
// function displayTomorrowsTasks() {
//   tomorrowTodoList.innerHTML = "";
//   for (let i = 0; i < tomorrowTasks.length; i++) {
//     let div = document.createElement("div");
//     div.innerHTML = `
//     <div class="task" id="${i}">
//     <p>Todo: ${tomorrowTasks[i].task}</p>
//     <button id="button${i}" class="todoButton">Done?</button>
//     </div>
//     `;
//     tomorrowTodoList.append(div);
//   }
// }

// //! querySelectors
// let tomorrowForm = document.querySelector("#tomorrowForm");
// let tomorrowCard = document.querySelector("#tomorrowCard");
// let listOfTomorrow = document.querySelector("#listOfTomorrow");
// let tomorrowTodoList = document.querySelector("#tomorrowTodoList");
// //! eventListeners
// tomorrowForm.addEventListener("submit", tomorrowFormEventHandler);
// tomorrowTodoList.addEventListener("click", tomorrowTodoCompletedEventHandler);

// let tomorrowTasks = [];
// // let completedList = [];
