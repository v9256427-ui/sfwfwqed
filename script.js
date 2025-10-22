document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");

  btn.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });
});
