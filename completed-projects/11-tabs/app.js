const buttons = document.querySelectorAll(".tab-btn");
const about = document.getElementsByClassName("about")[0];
const articles = document.querySelectorAll(".content");


about.addEventListener("click", function (tabby) {
  const id = tabby.target.dataset.id;

  if (id) {

    buttons.forEach(function (button) {
      button.classList.remove("active");
    });
    
    tabby.target.classList.add("active");
  
    articles.forEach(function (article) {
      article.classList.remove("active");
    });


    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
