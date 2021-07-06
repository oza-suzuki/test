const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
let value = false;

function flipCard() {

  if(lockBoard) return;
  if(this === firstCard) 
    return;

  this.classList.toggle('flip');

  if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
  }

  else{
    hasFlippedCard = false;
    secondCard = this;
    checkForMatch();
  }

}
  
function checkForMatch() {

  if(firstCard.dataset.framework === secondCard.dataset.framework)
  { 
    disableCards();
  }

  else{
    unflipCards();
  }
}


function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    lockBoard = false;
  }, 1500);
  
}


(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random()*12);
    card.style.order = randomPos;
  })
})();//immediately evoked function created. 


// console.log('I am clicked');
cards.forEach(card => card.addEventListener('click', flipCard));