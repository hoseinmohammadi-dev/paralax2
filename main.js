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


window.addEventListener("scroll", () => {
    const winT = window.scrollY;
    const winB = winT + window.innerHeight;
    const sec2St = sec2.offsetTop;
    const sec3St = sec3.offsetTop;
    const sec4St = sec4.offsetTop;
    const sec5St = sec5.offsetTop;
    const sec6St = sec6.offsetTop;



    hero.style.transform = `translate(-50%, ${winT * 0.3}px)`;

    if (winB >= sec2St) {
        sec2H2.classList.add("fadeUnder")
    }
    else {
        sec2H2.classList.remove("fadeUnder")
    }


    if (winB >= sec3St) {
        sec3H2.classList.add("fadeUp")
    }
    else {
        sec3H2.classList.remove("fadeUp")
    }

    if (winB >= sec4St) {
        sec4H2.classList.add("fadeUnder")
    }
    else {
        sec4H2.classList.remove("fadeUnder")
    }

    if (winB >= sec4H2) {
    }
    else {
        sec4img.style.transform = `translateY(-${winB * 0.1}px) scale(${1 + winB * 0.0001})`;
    }

    if (winB >= sec5St) {
        sec5H2.classList.add("fadeUp")
    }
    else {
        sec5H2.classList.remove("fadeUp")
    }


    if (winB >= sec6St) {
        sec6H2.classList.add("fadeUnder")
        sec6img.style.transform = `scale(${ winB * 0.0001})`
    }
    else {
        sec6H2.classList.remove("fadeUnder")
    }

    if (winB >= sec6H2) {
    }
    else {
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

