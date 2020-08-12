/////////////////////////Selectors////////////////////////////
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

/////////////////////////////////////////////////////////////

//////////////////////Event Listeners///////////////////////
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteCheck);

/////////////////////////////////////////////////////////////

////////////////////////Functions///////////////////////////
function addToDo(event) {
  //Prevent form from submitting
  event.preventDefault();
  //Create To-Do DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create LI
  const newToDo = document.createElement("li");
  newToDo.innerText = todoInput.value;
  newToDo.classList.add("todo-item");
  todoDiv.appendChild(newToDo);
  //Create Complete CHECK MARK button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  //Create Trash CHECK MARK button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //APPEND TO LIST
  todoList.appendChild(todoDiv);
  //Clear To-Do INPUT Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //DELETE To-Do
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }

  //CHECK MARK for Completed To-Do
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

/////////////////////////////////////////////////////////////
