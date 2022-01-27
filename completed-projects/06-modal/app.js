const modal = document.getElementsByClassName("modal-overlay")[0];
const modalOpen = document.getElementsByClassName("modal-btn")[0];
const closeBtn = document.getElementsByClassName("close-btn")[0];


modalOpen.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
