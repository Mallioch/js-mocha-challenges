
//This is incomplete and a horrible way to do it.
function hasAPair(hand) {
  var aces = 0;
  var twos = 0;
  var threes = 0;
  var fours = 0;
  var fives = 0;
  var sixes = 0;
  var sevens = 0;
  var eights = 0;
  var nines = 0;
  var tens = 0;
  var jacks = 0;
  var queens = 0;
  var kings = 0;

  for (var i = 0; i < hand.length; i++) {
    var card = hand[i];

    switch (card.number) {
      case 'A':
        aces += 1;
        break;
      case 2:
        twos += 1;
        break;
      case 3:
        threes += 1;
        break;
      case 4:
        fours += 1;
        break;
      case 5:
        fives += 1;
        break;
      case 6:
        sixes += 1;
        break;
      case 7:
        sevens += 1;
        break;
      case 8:
        eights += 1;
        break;
      case 9:
        nines += 1;
        break;
      case 10:
        tens += 1;
        break;
      case 'J':
        jacks += 1;
        break;
      case 'Q':
        queens += 1;
        break;
      case 'K':
        kings += 1;
        break;
    }
  }

  if (aces === 2 || twos === 2 || threes === 2 || fours === 2 || fives === 2 || sixes === 2 || sevens === 2 || eights === 2 || nines === 2 || tens === 2 || jacks === 2 || queens === 2 || kings === 2) {
    return true;
  }
  else {
    return false;
  }
}

//NTK: Objects as dictionaries
function hasPairGood(hand) {
  var cardCounts = calculateCardCounts(hand);

  var numbersOfPairs = 0;
  for (var key in cardCounts) {
    if (cardCounts[key] === 2) {
      numbersOfPairs += 1;
    }
  }

  return numbersOfPairs === 1;
}

function calculateCardCounts(hand) {
  var cardCounts = {};

  for(var i = 0; i < hand.length; i++) {
    var card = hand[i];

    if (cardCounts[card.number] === undefined) {
      cardCounts[card.number] = 1;
    }
    else {
      cardCounts[card.number] += 1;
    }
  }

  return cardCounts;
}

function hasThreeOfAKind(hand) {
  var cardCounts = calculateCardCounts(hand);

  var numbersOfTriplets = 0;
  for (var key in cardCounts) {
    if (cardCounts[key] === 3) {
      numbersOfTriplets += 1;
    }
  }

  return numbersOfTriplets === 1;
}

function hasFourOfAKind(hand) {
  var cardCounts = calculateCardCounts(hand);

  var numbersOfQuadruplets = 0;
  for (var key in cardCounts) {
    if (cardCounts[key] === 4) {
      numbersOfQuadruplets += 1;
    }
  }
  return numbersOfQuadruplets === 1;
}

function hasAFlush(hand) {
  var typeOfFirst = hand[0].suit;
  for (var i = 1; i < hand.length; i++) {
    var card = hand[i];
    if (card.suit != typeOfFirst) {
      return false;
    }
  }
  return true;
}

function convertToNumeric(number) {
  switch (number) {
    case 'A':
      return 1;
    case 'J':
      return 11;
    case 'Q':
      return 12;
    case 'K':
      return 13;
    default:
      return number;
  }

}

function hasAStraight(hand) {
  var copy = hand.slice(0);

  copy.sort(function(a, b) {
    var aValue = convertToNumeric(a.number);
    var bValue = convertToNumeric(b.number);
    return aValue > bValue;
  });

  var val = convertToNumeric(copy[0].number);
  for (var i = 1; i < copy.length; i++) {
    if (val + 1 === convertToNumeric(copy[i].number)) {
      val = convertToNumeric(copy[i].number);
    }
    else {
      return false;
    }
  }

  return true;
}

function calculateHand(hand) {
  if (hasFourOfAKind(hand)) {
    return { type: 'four-of-a-kind' };
  }
  if (hasThreeOfAKind(hand)) {
    return { type: 'three-of-a-kind' };
  }
  else if (hasPairGood(hand)) {
    return { type: 'pair' };
  }
  else if (hasAFlush(hand) && hasAStraight(hand)) {
    return { type: 'straight flush' };
  }
  else if (hasAFlush(hand)) {
    return { type: 'flush' };
  }
  else if (hasAStraight(hand)) {
    return { type: 'straight' };
  }
  else {
    return { type: 'nothing'};
  }
}
