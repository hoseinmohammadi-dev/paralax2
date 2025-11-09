const sec1 = document.querySelector(".hero");
const hero = document.querySelector(".hero > img");
const sec2 = document.querySelector(".sec2");
const sec2H2 = document.querySelector(".sec2 > h2");

window.addEventListener("scroll", () => {
    const sec1Height = sec1.offsetHeight;
    const scrollY = window.scrollY;


    const fromBottom = sec1Height - scrollY;

    hero.style.transform = `translate(-50%, ${scrollY * 0.3}px)`;

    if (fromBottom < scrollY) {
        sec2H2.classList.add("fadeUp")
    }
     else {
        sec2H2.classList.remove("fadeUp")
    }
});
