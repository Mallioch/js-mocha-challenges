
function whoWins(first, second) {

  if (first === 'rock' && second === 'scissors') {
    return 'first';
  }
  else if (first === 'scissors' && second === 'rock') {
    return 'second'
  }
  else if (first === 'paper' && second === 'rock') {
    return 'first';
  }
  else if (first === 'rock' && second === 'paper') {
    return 'second';
  }
  else if (first === 'scissors' && second === 'paper') {
    return 'first';
  }
  else if (first === 'paper' && second === 'scissors') {
    return 'second';
  }
  else if (first === second) {
    return 'neither';
  }
}
