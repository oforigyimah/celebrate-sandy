let pictures = [];

for (let i = 1; i < 43; i++){
    pictures.push(`sandy${i}.jpg`)
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
console.log(pictures);
shuffleArray(pictures);
console.log(pictures);