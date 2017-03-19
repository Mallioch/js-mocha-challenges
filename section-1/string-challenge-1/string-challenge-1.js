function stringReverser(str) {
  var newStr = '';

  for (var i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }

  return newStr;
}

function truncate(sentence) {
  var newSentence = sentence.substr(0, 15);
  newSentence += '...';
  return newSentence;
}

function truncateByCount(sentence, count) {
  var newSentence = sentence.substr(0, count);
  newSentence += '...';
  return newSentence;
}
