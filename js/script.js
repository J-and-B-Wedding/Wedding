/* MOBILE MENU */
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* CLOSE MENU ON LINK CLICK */
document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });

});

/* COUNTDOWN TIMER */
const weddingDate = new Date("June 21, 2026 14:00:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();
  const gap = weddingDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

}

setInterval(updateCountdown, 1000);

updateCountdown();

/* NAVBAR SCROLL EFFECT */
window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(247,248,246,0.96)";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";

  } else {

    navbar.style.background = "rgba(247,248,246,0.90)";
    navbar.style.boxShadow = "none";

  }

});