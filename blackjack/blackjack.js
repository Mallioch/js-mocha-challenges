

function countCards(cards) {
  var sum = 0;
  cards.forEach(function(card) {

    if (card.number === 'Q' || card.number === 'K' || card.number === 'J') {
      sum += 10;
    }
    else if (card.number !== 'A') {
      sum += card.number;
    }

  });

  cards.forEach(function(card) {

    if (card.number !== 'A') {
      return;
    }

    if (sum + 11 > 21) {
      sum += 1;
    }
    else {
      sum += 11;
    }

  });

  return sum;
}
