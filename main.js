const sec1 = document.querySelector(".hero");
const hero = document.querySelector(".hero > img");

const sec2 = document.querySelector(".sec2");
const sec2H2 = document.querySelector(".sec2 > h2");

const sec3 = document.querySelector(".sec3");
const sec3H2 = document.querySelector(".sec3 > .text > h2");

const sec4 = document.querySelector(".sec4");
const sec4H2 = document.querySelector(".sec4 > h2");
const sec4img = document.querySelector(".sec4 > img");

const sec5 = document.querySelector(".sec5");
const sec5H2 = document.querySelector(".sec5 > .text > h2");

const sec6 = document.querySelector(".sec6");
const sec6H2 = document.querySelector(".sec6 > h2");
const sec6img = document.querySelector(".sec6 > img");

const overlay = document.querySelector(".sec2 .overlay");
const cards = document.querySelectorAll(".sec2 > div > div");

const lenis = new Lenis({
  duration: 1.1,
  easing: (t) => t, 
  smooth: true,
  direction: "vertical",
  gestureOrientation: "vertical",
});


function raf(time) {
  lenis.raf(time); 
  requestAnimationFrame(raf);

  const winT = window.scrollY;
  const winB = winT + window.innerHeight;

  // Hero parallax
  hero.style.transform = `translate(-50%, ${winT * 0.3}px)`;

  // Section 2 fade
  if (winB >= sec2.offsetTop) sec2H2.classList.add("fadeUnder");
  else sec2H2.classList.remove("fadeUnder");

  // Section 3 fade
  if (winB >= sec3.offsetTop) sec3H2.classList.add("fadeUp");
  else sec3H2.classList.remove("fadeUp");

  // Section 4 fade
  if (winB >= sec4.offsetTop) sec4H2.classList.add("fadeUnder");
  else sec4H2.classList.remove("fadeUnder");

  // Section 4 image parallax
  sec4img.style.transform = `translateY(-${winB * 0.1}px) scale(${1 + winB * 0.0001})`;

  // Section 5 fade
  if (winB >= sec5.offsetTop) sec5H2.classList.add("fadeUp");
  else sec5H2.classList.remove("fadeUp");

  // Section 6 fade and image scale
  if (winB >= sec6.offsetTop) {
    sec6H2.classList.add("fadeUnder");
    sec6img.style.transform = `scale(${winB * 0.0001})`;
  } else {
    sec6H2.classList.remove("fadeUnder");
  }
}

requestAnimationFrame(raf);

// === Hover effect for sec2 cards ===
cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    overlay.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    card.style.position = "relative";
    card.style.zIndex = "1000";
  });
  card.addEventListener("mouseleave", () => {
    overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
    card.style.zIndex = "10";
  });
});
