function stripPuncutation(str) {
  var output = '';

  for (var i = 0; i < str.length; i++) {
    if ('.,:'.indexOf(str[i]) === -1) {
      output += str[i];
    }
  }

  return output;
}

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

function capitalizeEveryOtherLetter(str) {
  var output = '';

  for (var i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      output += str[i].toUpperCase();
    }
    else {
      output += str[i];
    }
  }

  return output;
}
