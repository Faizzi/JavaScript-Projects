const form = document.getElementById("form");
const button = document
  .getElementById("submitBtn")
  .addEventListener("click", () => {
    if ((form.style.display = "none")) {
      form.style.display = "block";
    } else {
      form.style.display = "none";
    }
  });
