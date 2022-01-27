// like counter code
//
//
var counter = 0;

const btnd = document.getElementById("btnd");
const btnr = document.getElementById("btnr");
const btni = document.getElementById("btni");  



// change like counter colour 
function changeTextColour() {
    if(counter < 0) { // if likes is negative
       btnr.style.color = "red";
    } else if (counter === 0) { // if likes is 0
        btnr.style.color = "black";
    } else if (counter > 0) { // if likes is positive
        btnr.style.color = "white";
    };  
}

// decrease likes
btnd.addEventListener("click", function () {
    counter--;
    btnr.textContent = counter.toString();

    changeTextColour();
});
// reset likes
btnr.addEventListener("click", function () {
    counter = 0;
    btnr.textContent = "0";

    changeTextColour();
});
// increase likes
btni.addEventListener("click", function () {
    counter++;
    btnr.textContent = counter.toString();

    changeTextColour();
});


// theme randomizer code
//
//
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btnt");

// generate random number
function randomNumber() {
    return Math.floor(Math.random() * hex.length)
}

btn.addEventListener("click", function () {
    var hexCode1 = "#";
    var hexCode2 = "#";
    
    for (let i = 0; i < 6; i++) {
        hexCode1 += hex[randomNumber()];
        hexCode2 += hex[randomNumber()];
    };
    
    document.body.style.backgroundColor = hexCode1;
    document.body.style.color = hexCode2;
})

// string variable (hex code)
// loop 6 times randomNumber()
// += string variable + randomNumber()


// employee statements
//
//
const reviews = [
    {
      id: 1,
      name: "Killua Zoldyck",
      job: "Pilot",
      img:
        "./assets/killua.jpg",
      text:
        "I've never actually flown the plane before. I just carry the passengers on my back since I'm faster. but it's still pretty fun!",
    },
    {
      id: 2,
      name: "Justin Trudeau",
      job: "Board Member",
      img:
        "https://pm.gc.ca/themes/pm_theme/images/Trudeau-head.jpg",
      text:
        "Working with the wonderful staff at Air Canada has truly been an eye-opener for me. I have always had an irrational fear of airplanes, but thanks to Air Canada they have since been alleviated! I can now return to my private jet.",
    },
    {
      id: 3,
      name: "Oreo",
      job: "Company Mascot",
      img:
        "./assets/oreo.jpg",
      text:
        "(dog noises)",
    },
    {
      id: 4,
      name: "Johnny Joestar",
      job: "Engineer",
      img:
        "https://pbs.twimg.com/profile_images/1377783374052491265/S9pw6NLW_400x400.jpg",
      text:
        "These airplanes are so weird. But they're pretty cool when I imbue them with my Golden Spin.",
    },
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  var index = 0;
  
  
  function printReview(target) {
    const data = reviews[target];
  
    img.src = data.img;
    author.textContent = data.name;
    job.textContent = data.job;
    info.textContent = data.text;
  }
  
  printReview(index);
  
  prevBtn.addEventListener("click", function () {
    index--;
    if (index < 0) { index = 3;};
  
    printReview(index);
  });
  
  nextBtn.addEventListener("click", function () {
    index++;
    if (index > 3) { index = 0;};
  
    printReview(index);
  });
  
  
  randomBtn.addEventListener("click", function () {
    index = Math.floor(Math.random() * reviews.length);
    console.log(index);
    printReview(index);
  });


// navbar toggle script
//
//
const navToggle = document.getElementById("nav-toggle");
const links = document.querySelector(".nav-container");

navToggle.addEventListener("click", function () {
    links.classList.toggle("show-nav");
})
  

// takeoff button
//
//

const spcBtn = document.getElementById("dombtn");

spcBtn.addEventListener("click", function (track) {
        navToggle.style.transform = "rotate(180deg)";
        let id = null;
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 600 && track == 1) {
            clearInterval(id);
          } else {
            pos++;
            navToggle.style.top = pos + 'px';
          }
        }
        
})