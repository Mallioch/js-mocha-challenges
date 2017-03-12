function describeLetter(char) {

  if (char === 'b' || char === 'c') {
    return 'consonant';
  }
  else if (char === 'a') {
    return 'vowel';
  }
  else if (char === '.') {
    return 'punctuation';
  }
  else {
    return 'something else';
  }
}

function identifyPerson(title, lastName) {
  if (title === 'Mr' && lastName === 'Anderson') {
    return 'The chosen one';
  }
  else {
    return 'Some random dude';
  }
}
