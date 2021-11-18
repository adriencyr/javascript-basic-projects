var counter = 0;

const btnd = document.getElementById("btnd");
const btnr = document.getElementById("btnr");
const btni = document.getElementById("btni");  
const value = document.getElementById("value")


function changeBackgroundColour() {
    if(counter < 0) {
        document.body.style.backgroundColor = "red";
    } else if (counter === 0) {
        document.body.style.backgroundColor = "white";
    } else if (counter > 0) {
        document.body.style.backgroundColor = "green";
    };  
}

btnd.addEventListener("click", function () {
    counter--;
    value.textContent = counter.toString();

   changeBackgroundColour();  
});

btnr.addEventListener("click", function () {
    counter = 0;
    value.textContent = "0";

    changeBackgroundColour(); 
});

btni.addEventListener("click", function () {
    counter++;
    value.textContent = counter.toString();

    changeBackgroundColour();
});