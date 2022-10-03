let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let msg = document.getElementById("msg");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formvalidation();
});

let formvalidation = (e) => {
  if (textInput.value === "") {
    msg.innerHTML = "task can't be blank";
  } else {
    msg.innerHTML = "";
    console.log("sucess");
    acceptData();
    add.setAttribute("data-bs-dismiss", "modal");
    add.click();
    // IIFE Immediately Invoke Function (It invokes only one time)
    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = {};
let acceptData = () => {
  data["text"] = textInput.value;
  data["date"] = dateInput.value;
  data["description"] = textarea.value;
  console.log(data);
  createTask();
};

let createTask = () => {
  tasks.innerHTML += `
    <div class="task1">
          <span class="fw-bold">${data.text}</span>
          <span class="small text-secondary">${data.date}</span>
          <p>${data.description}</p>
          <span class="options">
            <i data-bs-toggle="modal" data-bs-target="#form" onClick="updateTask(this)" class="fas fa-edit"></i>
            <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
          </span>
        </div>
    
    `;
  resetForm();
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};

let updateTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[0].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[2].innerHTML;

  selectedTask.remove();
};
