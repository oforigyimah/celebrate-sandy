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
