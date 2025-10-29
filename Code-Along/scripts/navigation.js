const hamburgerBtn = document.getElementById("ham-btn");
const navBar = document.querySelector("#nav-bar");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("show");
    navBar.classList.toggle("show");
})