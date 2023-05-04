pictures = [];

for (i = 1; i < 43; i++){
    pictures.push(`sandy${i}.jpg`)
}

// Create the main container
const container = document.createElement('div');
container.classList.add('card-swiper');

// Create the card groups container
const cardGroups = document.createElement('div');
cardGroups.classList.add('card-groups');
container.appendChild(cardGroups);

// Create the first card group with the "active" status
const firstGroup = createCardGroup(0, 'active');
cardGroups.appendChild(firstGroup);

// Create the second and third card groups with the "unknown" status
const secondGroup = createCardGroup(1, 'unknown');
cardGroups.appendChild(secondGroup);

const thirdGroup = createCardGroup(2, 'unknown');
cardGroups.appendChild(thirdGroup);

// Create the buttons container
const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('card-swiper-buttons');
container.appendChild(buttonsContainer);

// Create the "hate" button
const hateButton = createButton('hate-button', 'fa-solid fa-x', handleHateClick);
buttonsContainer.appendChild(hateButton);

// Create the "love" button
const loveButton = createButton('love-button', 'fa-solid fa-heart', handleLoveClick);
buttonsContainer.appendChild(loveButton);

// Append the main container to the DOM
document.body.appendChild(container);

// Helper functions

function createCardGroup(index, status) {
  const cardGroup = document.createElement('div');
  cardGroup.classList.add('card-group');
  cardGroup.setAttribute('data-index', index);
  cardGroup.setAttribute('data-status', status);
  
  for (let i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      const littleCard = createCard('little-card');
      cardGroup.appendChild(littleCard);
    } else {
      const bigCard = createCard('big-card');
      cardGroup.appendChild(bigCard);
    }
  }
  
  return cardGroup;
}

function createCard(className) {
  const card = document.createElement('div');
  card.classList.add('card', className);
  return card;
}

function createButton(id, iconClassName, onClick) {
  const button = document.createElement('button');
  button.setAttribute('id', id);
  button.onclick = onClick;
  
  const icon = document.createElement('i');
  icon.classList.add('fa-solid',iconClassName);
  button.appendChild(icon);
  
  return button;
}

function handleHateClick() {
  // Handle the "hate" button click
}

function handleLoveClick() {
  // Handle the "love" button click
}


/* 

.big-card:nth-child(2) {
  background-image: url("");
  transform: translateX(-10%) rotate(-1deg);
}

.big-card:nth-child(4) {
  background-image: url("");
  transform: rotate(2deg);
}

.big-card:nth-child(6) {
  background-image: url("");
  transform: translateX(-6%) rotate(-3deg);
}

.big-card:nth-child(8) {
  background-image: url("");
  transform: translate(10%, 3%) rotate(5deg);
}

.card-group[data-index="1"] > .big-card:nth-child(6) {
  background-image: url("");
}

.card-group[data-index="1"] > .big-card:nth-child(8) {
  background-image: url("");
}

.card-group[data-index="2"] > .big-card:nth-child(4) {
  background-image: url("");
}

.card-group[data-index="2"] > .big-card:nth-child(8) {
  background-image: url("");
}

.little-card:nth-child(1) {
  background-image: url("");
}

.little-card:nth-child(3) {
  background-image: url("");
}

.little-card:nth-child(5) {
  background-image: url("");
}

.little-card:nth-child(7) {
  background-image: url("");
}


*/

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
console.log(shuffleArray(array));