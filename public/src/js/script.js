document.body.style.overflowX = 'hidden';
document.body.style.width = '100%';
document.body.style.maxWidth = '100%';
document.documentElement.style.width = '100%';
document.documentElement.style.maxWidth = '100%';
document.body.style.margin = '0';
document.body.style.padding = '0';
document.documentElement.style.margin = '0';
document.documentElement.style.padding = '0';


let index_ = 0,
    interval_ = 1000;

const rand = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
    star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
    star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

    star.style.animation = "none";
    star.offsetHeight;
    star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
    setTimeout(() => {
        animate(star);

        setInterval(() => animate(star), 1000);
    }, index_++ * (interval_ / 3))
}


/* NAVIGATION*/
// COLLAPSE THE NAVBAR BY ADDING THE TOP-NAV-COLLAPSE CLASS
window.onscroll = function () {
    scrollFunction();
    scrollFunctionBTT(); // back to top button
};

function scrollFunction() {
    let intViewportWidth = window.innerWidth;
    if (
        document.body.scrollTop > 30 ||
        (document.documentElement.scrollTop > 30) & (intViewportWidth > 991)
    ) {
        document.getElementById("navbar").classList.add("top-nav-collapse");
    } else if (
        document.body.scrollTop < 30 ||
        (document.documentElement.scrollTop < 30) & (intViewportWidth > 991)
    ) {
        document.getElementById("navbar").classList.remove("top-nav-collapse");
    }
}

// NAVBAR ON MOBILE
let elements = document.querySelectorAll(".nav-link");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", () => {
        document.querySelector(".offcanvas-collapse").classList.toggle("open");
    });
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
});


/* BACK TO TOP BUTTON */
// GET THE BUTTON
myButton = document.getElementById("myBtn");

// WHEN THE USER SCROLLS DOWN 20PX FROM THE TOP OF THE DOCUMENT, SHOW THE BUTTON
function scrollFunctionBTT() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}

// WHEN THE USER CLICKS ON THE BUTTON, SCROLL TO THE TOP OF THE DOCUMENT
function topFunction() {
    document.body.scrollTop = 0; // for Safari
    document.documentElement.scrollTop = 0; // for Chrome, Firefox, IE and Opera
}

// AOS ANIMATION ON SCROLL
AOS.init({
    duration: 1000,
    easing: "ease",
    once: true, // whether animation should happen only once - while scrolling down
});


/* -- Text effect -- */
let interval = null;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";


const screen = document.querySelector(".f-card-in");
const  note = document.querySelector(".note");

screen.onmouseenter = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        note.innerText = note.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return note.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 27)]
            })
            .join("");

        if(iteration >= note.dataset.value.length){
            clearInterval(interval);
        }

        iteration += 1 ;
    }, 30);
}

let isAnimating = false;

function animatenote() {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        note.innerText = note.innerText
            .split("")
            .map((letter, index) => {
                if(index < iteration) {
                    return note.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 27)]
            })
            .join("");

        if(iteration >= note.dataset.value.length){
            clearInterval(interval);
            isAnimating = false;
        }

        iteration += 1 ;
    }, 30);
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const middlePosition = scrollTop + (clientHeight / 2);

    if (middlePosition >= screen.offsetTop && middlePosition <= (screen.offsetTop + screen.offsetHeight)) {
        if (!isAnimating) {
            animatenote();
            isAnimating = true;
        }
    }
}

window.addEventListener("scroll", handleScroll);

const pictures = [];

for (let i = 1; i < 43; i++){
    pictures.push(`url(/src/img/sandy${i}.jpg)`)
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


const randAssign = () => {
    shuffleArray(pictures);

    let bigCard1 = document.querySelector('.big-card:nth-child(2)');
    let bigCard2 = document.querySelector('.big-card:nth-child(4)');
    let bigCard3 = document.querySelector('.big-card:nth-child(6)');
    let bigCard4 = document.querySelector('.big-card:nth-child(8)');
    let littleCard1 = document.querySelector('.little-card:nth-child(1)');
    let littleCard2 = document.querySelector('.little-card:nth-child(3)');
    let littleCard3 = document.querySelector('.little-card:nth-child(5)');
    let littleCard4 = document.querySelector('.little-card:nth-child(7)');

    let cards = [
        bigCard1,
        bigCard2,
        bigCard3,
        bigCard4,
        littleCard1,
        littleCard2,
        littleCard3,
        littleCard4
    ];
    let i = 0;
    cards.forEach(card => {
        card.style.cssText = `background-image: ${pictures[i]}`;
        i++;
    });
}



let activeIndex = 0;
let spaceIndex = 1;

const groups = document.getElementsByClassName("card-group");

const handleLoveClick = () => {
    if (spaceIndex % 3 === 0)
    {
        console.log("Hello world");
        randAssign();
    }
    spaceIndex++;
    const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "after";

    nextGroup.dataset.status = "becoming-active-from-before";



    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

const handleHateClick = () => {
    if (spaceIndex % 3 === 0)
    {
        console.log("Hello world");
        randAssign();
    }
    spaceIndex--;
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

    const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

    currentGroup.dataset.status = "before";

    nextGroup.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
        nextGroup.dataset.status = "active";
        activeIndex = nextIndex;
    });
}

