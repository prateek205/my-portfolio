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

// let timer = setInterval(nextBtn, 4500);

let menuBar = document.getElementById("menuIcon");
let navLink = document.getElementById("navLinks");

menuBar.addEventListener("click", () => {
  navLink.classList.toggle("active");
});

// GSAP ANIMATION

let tl = gsap.timeline();

// Navbar Animation

tl.from(".navLogo", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
});

tl.from(".navItem", {
  scale: 2,
  opacity: 0,
  duration: 0.8,
});

// heroSection

tl.from(".heroContent h1", { y: -50, opacity: 0, duration: 1 })
  .from(".heroContent h2", { y: -50, opacity: 0, duration: 1 })
  .from(".heroContent p", { opacity: 0, duration: 1 })
  .from(".heroContent button .herBtn", {
    y: 50,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
  })
  .from(".heroBtn", {
    scale: 2,
    opacity: 0,
    duration: 0.6,
    delay: 0.5,
  });
// Skill Card Animation

gsap.from("#skillCrd", {
  scale: 0,
  opacity: 0,
  scrollTrigger: {
    trigger: "#skillCrd",
    scroller: "body",
    // markers: true,
    scrub: true,
  },
});

gsap.from("#Skills #skillCont h1", {
  scale: 0,
  duration: 2,
  x: 200,
  scrollTrigger: {
    trigger: "#Skills #skillCont",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 60%",
    scrub: true,
  },
});

gsap.from("#Skills #skillCont p", {
  scale: 0,
  // delay: 1,
  duration: 2,
  x: -200,
  scrollTrigger: {
    trigger: "#Skills #skillCont",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "top 60%",
    scrub: true,
  },
});

// Project Animation

gsap.from("#Projects #pro", {
  scale: 2,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#Projects #pro h1",
    scroller: "body",
    // markers: true,
    scrub: true,
  },
});

gsap.from("#Projects #pro1", {
  x: -100,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#pro1",
    scroller: "body",
    // markers: true,
    scrub: true,
  },
});
gsap.from("#Projects #pro4", {
  x: 100,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#pro1",
    scroller: "body",
    // markers: true,
    scrub: true,
  },
});
gsap.from("#Projects #pro2", {
  scale: 0,
  duration: 2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#pro1",
    scroller: "body",
    // markers: true,
    scrub: true,
  },
});
gsap.from("#Projects #pro3", {
  scale: 0,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#pro1",
    scroller: "body",
    // markers: true,
    scrub: true,
  },
});

// About Animation
