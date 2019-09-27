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
  } else if (event.target.id === "soon") {
    nowCard.style.visibility = "hidden";
    soonCard.style.visibility = "visible";
    laterCard.style.visibility = "hidden";
  } else if (event.target.id === "later") {
    nowCard.style.visibility = "hidden";
    soonCard.style.visibility = "hidden";
    laterCard.style.visibility = "visible";
  }
};

//! querySelectors
let newListForm = document.querySelector("#newListForm");
let listOfLists = document.querySelector("#listOfLists");
let header = document.querySelector("#headBar");
let nowCard = document.querySelector("#todayCard");
let soonCard = document.querySelector("#tomorrowCard");
let laterCard = document.querySelector("#somedayCard");

//! eventListeners
newListForm.addEventListener("submit", newListFormEventHandler);
header.addEventListener("click", navBarEventHandler);
