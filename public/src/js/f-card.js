/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";


const screen = document.querySelector(".f-card-in");
const  name = document.querySelector(".note");

screen.onmouseenter = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  var interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return name.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 27)]
      })
      .join("");
    
    if(iteration >= name.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 ;
  }, 30);
}

let isAnimating = false;

function animateName() {
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    name.innerText = name.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return name.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 27)]
      })
      .join("");
    
    if(iteration >= name.dataset.value.length){ 
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
      animateName();
      isAnimating = true;
    }
  }
}

window.addEventListener("scroll", handleScroll);
