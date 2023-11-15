const menuIcon = document.querySelector(".menu-icon");
const sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click", (e) => {
    e.preventDefault();
    menuIcon.classList.toggle("change");
    sidebar.style.width = sidebar.style.width === "400px" ? "0" : "400px";
});

const anchors = document.querySelectorAll(".side-anchor");
const anchorsArr = Array.from(anchors);

anchorsArr.forEach(anchor => {
    anchor.addEventListener("click", () => {
        menuIcon.classList.remove("change");
        sidebar.style.width = "0";
    });
}); 

