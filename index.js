// console.log("Hello world !!!");

let slide = document.getElementById("slides");
let heroDot = document.getElementsByClassName("dot");
let next = document.getElementById("nxt");
let previous = document.getElementById("prev");
let heroContainer = document.querySelector("heroContainer");

let numberOfPage = 4;
let index = 0;
let width = 100;

let nextBtn = () => {
  index++;
  if (index >= numberOfPage) {
    index = 0;
  }
  slide.style.transform = `translateX(-${width * index}%)`;
  activeDot();
};

let prevBtn = () => {
  if (index <= 0) {
    index = numberOfPage;
  }
  index--;
  slide.style.transform = `translateX(-${width * index}%)`;
  activeDot();
};

function activeDot() {
  for (let i = 0; i < heroDot.length; i++) {
    heroDot[i].classList.remove("active");
  }
  heroDot[index].classList.add("active");
}
next.addEventListener("click", nextBtn);
previous.addEventListener("click", prevBtn);

let timer = setInterval(nextBtn, 4500);