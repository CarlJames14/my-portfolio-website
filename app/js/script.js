// navigation function
const menu = document.querySelector("#menu");
const header = document.querySelector(".header");
const headerLinks = document.querySelector(".header__links");
const backbtn = document.getElementById("back");

menu.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    headerLinks.classList.add("close");
  } else {
    header.classList.add("open");
    headerLinks.classList.remove("close");
  }
});

const btn = document.querySelector("#btn");
const inputs = document.querySelector("form");

btn.addEventListener("click", () => {
  let name = inputs.elements["name"].value;
  let email = inputs.elements["email"].value;
  let message = inputs.elements["message"].value;

  Email.send({
    Host: "smtp.gmail.com",
    Username: "carljamesroxas3@gmail.com",
    Password: "itbksxjsdlrktkgh",
    To: "carljamesroxas3@gmail.com",
    From: email,
    Subject: `${name} Message You!`,
    Body: `Name: ${name} <br>
      Email: ${email} <br>
      Message: ${message}`,
  }).then((msg) => alert("Thank you"));
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backbtn.style.display = "block";
  } else {
    backbtn.style.display = "none";
  }
});

// gsap animation
gsap.registerPlugin(ScrollTrigger);

const timeline = gsap.timeline({ defaults: { duration: 1 } });

timeline
  .from(".hero__content", {
    opacity: 0,
    ease: "power2.in",
  })
  .from(".big-text", { opacity: 0, ease: "power2.in" })
  .from(".arrow", { opacity: 0, ease: "power2.in" });

gsap.from("#hero-btn", {
  duration: 1,
  delay: 1,
  opacity: 0,
  ease: "power2.in",
});

gsap.from(".nav", {
  duration: 1,
  delay: 2,
  y: "-100",
  ease: "power2",
});

gsap.from(".hero__links", { duration: 1, delay: 2, x: "-400", ease: "power2" });

gsap.from("#back", { duration: 2, delay: 5, opacity: 0 });

gsap.from(".section-break-1__content", {
  scrollTrigger: ".section-break-1_content",
  duration: 1,
  opacity: 0,
  ease: "power2.in",
});

gsap.from("#about-img", {
  scrollTrigger: "#about-img",
  duration: 1,
  opacity: 0,
  x: "-200",
  ease: "power1",
  delay: 1.2,
});

gsap.from("#container", {
  scrollTrigger: "#container",
  duration: 1,
  opacity: 0,
  y: "-50",
  ease: "power1",
  delay: 1,
});

gsap.from(".aboutSection__skills", {
  scrollTrigger: ".aboutSection__skills",
  duration: 1,
  opacity: 0,
  y: "-100",
  delay: 0.5,
  ease: "power1",
});

gsap.from("#card1", {
  scrollTrigger: "#card1",
  duration: 1,
  delay: 1,
  opacity: 0,
  y: "-50",
  ease: "power1",
});

gsap.from("#card2", {
  scrollTrigger: "#card2",
  duration: 1,
  delay: 1.25,
  opacity: 0,
  y: "-50",
  ease: "power1",
});

gsap.from("#card3", {
  scrollTrigger: "#card3",
  duration: 1,
  delay: 1.5,
  opacity: 0,
  y: "-50",
  ease: "power1",
});

gsap.from(".section-break-2__content", {
  scrollTrigger: ".section-break-2__content",
  duration: 1,
  opacity: 0,
  ease: "power2.in",
  delay: 0.5,
});

gsap.from("#project-1", {
  scrollTrigger: "#project-1",
  opacity: 0,
  y: "-50",
  duration: 1,
  delay: 0.25,
  ease: "power1",
});
gsap.from("#project-2", {
  scrollTrigger: "#project-2",
  opacity: 0,
  y: "-50",
  duration: 1,
  delay: 0.5,
  ease: "power1",
});
gsap.from("#project-3", {
  scrollTrigger: "#project-3",
  opacity: 0,
  y: "-50",
  duration: 1,
  delay: 0.75,
  ease: "power1",
});
