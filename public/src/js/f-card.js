/* -- Text effect -- */

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

let interval = null;

const screen = document.querySelector(".f-card-in"),
      name = document.querySelector(".note");

screen.onmouseenter = event => {  
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
    }
    
    iteration += 1 ;
  }, 30);
}