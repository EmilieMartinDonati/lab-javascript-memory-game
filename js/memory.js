class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
  }

  checkIfPair(card1, card2) {
  this.pairsClicked += 1;

  if (card1 === card2) {
    this.pairsGuessed += 1;
    return true;
  }
  else {
    return false;
  }
  }

  checkIfFinished() {
    if (this.pairsGuessed !== this.cards.length) {
      return false;
    }
    // if () {
    //   return true;
    // }
  }
}

// Je dois vérifier qu'il ne reste pas de carte double.

// The following is required for automated testing. Please, ignore it.
if (typeof module !== 'undefined') module.exports = MemoryGame;
