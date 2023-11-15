const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("change");
    sidebar.style.width = sidebar.style.width === "400px" ? "0" : "400px";
});

