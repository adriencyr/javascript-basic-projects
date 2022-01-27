const sidebar = document.getElementsByClassName("sidebar")[0];
const toggleButton = document.getElementsByClassName("sidebar-toggle")[0];
const closeButton = document.getElementsByClassName("close-btn")[0];

toggleButton.addEventListener("click", function () {
    sidebar.classList.toggle("show-sidebar");
})

closeButton.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
})