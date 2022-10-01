var itemsContainer = document.getElementById("taskGenerator");
var input = document.getElementById("inputData");
var submitBtn = document.getElementById("submitBtn");
var trashIcon = document.getElementById("trash");
var alertlabel = document.getElementsByClassName("para")[0];


submitBtn.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});
function addItem() {
  if (input.value === "") {
    alertlabel.style.display = "block";
    input.addEventListener("click", function () {
      alertlabel.style.display = "none";
    });
  } else {
    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");
    divParent.className = "items";
    divParent.innerHTML = "<div>" + input.value + "</div>";
    checkIcon.className = "fa-solid fa-square-check";
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "darkgray";
    checkIcon.style.color = "darkgray";
    

    checkIcon.addEventListener("click", function () {
      checkIcon.style.color = "limegreen";
    });
    divChild.appendChild(checkIcon);
    trashIcon.addEventListener("click", function () {
      divParent.remove();
    });
    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    itemsContainer.appendChild(divParent);
    input.value = "";
  }
}
