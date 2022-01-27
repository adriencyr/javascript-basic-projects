const videoCtr = document.getElementsByClassName("video-container")[0];
const switchButton = document.getElementsByClassName("switch-btn")[0];


switchButton.addEventListener("click", function () {
  if (!switchButton.classList.contains("slide")) {
    switchButton.classList.add("slide");
    videoCtr.pause();
  } else {
    switchButton.classList.remove("slide");
    videoCtr.play();
  }
});


const loading = document.getElementsByClassName("preloader")[0];

window.addEventListener("load", function () {
  loading.classList.add("hide-preloader");
});
