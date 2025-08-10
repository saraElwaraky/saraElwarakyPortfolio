// Cv button dancing///////////////////////////////

let cvBtn = document.querySelector(".home-content .btn");
console.log(cvBtn);

setInterval(() => {
  cvBtn.classList.add("dancing");
  setTimeout(() => {
    cvBtn.classList.remove("dancing");
  }, 2000);
}, 5000);

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
ScrollReveal().reveal(
  ".home-img,.portfolio-box,.contact form,#contactAnimation",
  {
    origin: "bottom",
  }
);
ScrollReveal().reveal(".home-content h1,.skills-content", { origin: "left" });
ScrollReveal().reveal(".home-content p,.about-content", { origin: "right" });

// typped js//////////////////////////////////////////////////

const typed = new Typed(".job-title", {
  strings: ["Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

//lottie contact animation ///////////////////////////
lottie.loadAnimation({
  container: document.getElementById("arrow-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/assets/imgs/ZwWru2tEpN.json",
});
lottie.loadAnimation({
  container: document.getElementById("contactAnimation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "/assets/imgs/x3ke5axSda.json",
});

// ///////////////
const form = document.querySelector(".contact form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  Swal.fire({
    icon: "success",
    title: "Thank you for your message :)",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    position: "center",
    background: "#4CAF50",
    color: "#fff",
  });

  // إرسال البيانات هنا لو محتاج
});
