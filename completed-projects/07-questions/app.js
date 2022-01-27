const questionAll = document.querySelectorAll(".question");

questionAll.forEach(function (question) {
    const button = question.querySelector(".question-btn");

    button.addEventListener("click", function () {

        questionAll.forEach(function (i) {
            if (i != question) {
              i.classList.remove("show-text");
            }
          });
          
        question.classList.toggle("show-text")  
    })
})