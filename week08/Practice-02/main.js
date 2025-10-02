document.querySelectorAll("[data-color]").forEach((button) => {
  button.addEventListener("click", (e) => {
    box.style.backgroundColor = e.target.dataset.color;
  });
})