function arrayReverser(arr) {
  var output = [];
  for (var i = arr.length - 1; i > -1; i--) {
    output.push(arr[i]);
  }
  return output;
}

function sumArrayOfNumbers(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


function numbersOver10(arr) {
  var bigNums = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      bigNums.push(arr[i]);
    }
  }
  return bigNums;
}

function numbersOverX(arr, num) {
  var bigNums = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      bigNums.push(arr[i]);
    }
  }
  return bigNums;
}

function stringsLongerThanFourLetters(arr) {
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > 4) {
      output.push(arr[i]);
    }
  }

  return output;
}

function stringsLongerThanXLetters(arr, length) {
  var output = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > length) {
      output.push(arr[i]);
    }
  }

  return output;
}
