let form = document.getElementById("form");
let input = document.getElementById("input");
let posts = document.getElementById("post");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = (e) => {
  if (input.value === "") {
    msg.innerHTML = "can't submit blank post";
  } else {
    console.log("success");
    acceptData();
  }
};

let data = {};

let acceptData = (e) => {
  data["text"] = input.value;
  // console.log(data);
  createPost();
};

let createPost = (e) => {
  posts.innerHTML += `
  <div>
  <p>${data.text}</p>
  <div id="options">
    <i onclick="editPost(this)" class="fas fa-edit"></i>
    <i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
  </div>
</div>
  `;
  input.value = "";
};
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
};
