function stringReverser(str) {
  var newStr = '';

  for (var i = str.length - 1; i > -1; i--) {
    newStr += str[i];
  }

  return newStr;
}
