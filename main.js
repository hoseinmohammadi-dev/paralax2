const sec1 = document.querySelector(".hero");
const hero = document.querySelector(".hero > img");
const sec2 = document.querySelector(".sec2");
const sec2H2 = document.querySelector(".sec2 > h2");

window.addEventListener("scroll", () => {
    const winT = window.scrollY;
    const winB = winT + window.innerHeight;
    const sec2St = sec2.offsetTop;



    hero.style.transform = `translate(-50%, ${winT * 0.3}px)`;

    if (winB >= sec2St) {
        sec2H2.classList.add("fadeUp")
    }
    else {
        sec2H2.classList.remove("fadeUp")
    }

});


// hover for sec2

const overlay = document.querySelector(".sec2 .overlay");
const cards = document.querySelectorAll(".sec2 > div > div");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        card.style.position = "relative";
        card.style.zIndex = "1000";
    });
    card.addEventListener("mouseleave", () => {
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0)";
        card.style.zIndex = "10";
    })
})

