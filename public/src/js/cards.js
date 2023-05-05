const pictures = [];

for (let i = 1; i < 43; i++){
    pictures.push(`url(/public/src/img/sandy${i}.jpg)`)
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
  spaceIndex++;
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;
  
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
        nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);
        
  currentGroup.dataset.status = "after";
  
  nextGroup.dataset.status = "becoming-active-from-before";
 
  if (spaceIndex % 3 === 0)
  {
    console.log("Hello world");
    randAssign();
  }
  
  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
}

const handleHateClick = () => {
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

