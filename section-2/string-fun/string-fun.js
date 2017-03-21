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

function camelCase(str) {
  str = str.toLowerCase();

  var output = '';
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = lowerCase.toUpperCase();

  var capitalizeNext = false;
  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    var lowerCaseIndex = lowerCase.indexOf(char)
    if (lowerCaseIndex === -1) {
      capitalizeNext = true;
      continue;
    }
    else {
      if (capitalizeNext) {
        output += char.toUpperCase();
        capitalizeNext = false;
      }
      else {
        output += char;
      }
    }

  }

  return output;
}

function kabobCase(str) {
  str = str.toLowerCase();
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';

  var output = '';
  for (var i = 0; i < str.length; i++) {
    if (lowerCase.indexOf(str[i]) > -1) {
      output += str[i];
    }
    else {
      output += '-';
    }
  }
  return output;
}
