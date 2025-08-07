// Cv button dancing///////////////////////////////

let cvBtn = document.querySelector(".home-content .btn");
console.log(cvBtn);

setInterval(() => {
  cvBtn.classList.add("dancing");
  setTimeout(() => {
    cvBtn.classList.remove("dancing");
  }, 2000);
}, 10000);

// menu icon
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.add("navbar-transition");

  navbar.classList.toggle("active");
};

// active navbar link//////////////////////////////////////
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
window.onscroll = () => {
  // console.log("hi");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
// sscroll reveal//////////////////////////////////////////////////
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content,.heading,.about-img", { origin: "top" });
ScrollReveal().reveal(".home-img,.portfolio-box,.contact form", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

// typped js//////////////////////////////////////////////////

const typed = new Typed(".job-title", {
  strings: ["Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
