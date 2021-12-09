const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");


function randomNumber() {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener("click", function () {
    const index = randomNumber();
    document.body.style.backgroundColor = colors[index];
    color.textContent = colors[index];
})