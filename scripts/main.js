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

//! querySelectors
let newListForm = document.querySelector("#newListForm");
let listOfLists = document.querySelector("#listOfLists");
//! eventListeners
newListForm.addEventListener("submit", newListFormEventHandler);
