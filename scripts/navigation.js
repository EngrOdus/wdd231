const hamburgerBtn = document.getElementById("ham-btn");
const navBtn = document.getElementById("nav-bar");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("show");
    navBtn.classList.toggle("show");
})