const gameContainer = document.getElementById("game");
const startGame = document.getElementById('startGame')
const tryAgain = document.getElementById('tryAgain')
const firstPage = document.getElementById('firstPage')
// const playAgain = document.createElement('button')
// playAgain.innerText = 'Try Again'



let highscore = [] 
let card1 = null;
let card2 = null;
let numCount = 0
let clickTimes = 0


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  
  return array;
}

let shuffledColors = shuffle( COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  clickTimes += 1
  const card = event.target
  const cardColor = card.classList[0]
  card.style.backgroundColor = cardColor


  if (true) {
    card1 = card1 || card;
    card2 = card === card1 ? null : card;
    
  }

  if (card1 && card2) {
    let a = card1.classList[0]
    let b = card2.classList[0]
    
    if (a === b) {
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      numCount +=2
      
    } else {
      setTimeout(function() {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1 = null;
        card2 = null;
        
      }, 1000);
    }
  } 

  if(numCount === COLORS.length) {
    
    setTimeout(function() {
      alert('Congratulations! You made it at ' + clickTimes + ' clicks')
      // firstPage.append(playAgain)
      // tryAgain.addEventListener('click', playmore)
      
      
    }, 300)
    highscore.push(clickTimes)
    
    
    
  }
  localStorage.setItem('myScores', JSON.stringify(highscore))

}

let start = 0

function pushButton() {
  createDivsForColors(shuffledColors);
  start ++
  gameContainer.style.backgroundColor = 'black'
  gameContainer.style.border = 'coral double 10px'
  gameContainer.style.height = '100%'
  if (start === 1){
    startGame.removeEventListener('click', pushButton)
  }
  if(localStorage.myScores){
    let myStorageData = JSON.parse(localStorage.myScores)
  let winner = Math.min(...myStorageData)
  const scoreRecord = document.createElement('button')
  firstPage.append(scoreRecord)
  scoreRecord.innerText = `WINNING SCORE: ${winner}`
  }else{

  }

  
}



startGame.addEventListener('click', pushButton)

// function playmore(){
//   window.location.reload
// }






// when the DOM loads



// let here = 0 < 3 ? 'yes': 'no'
