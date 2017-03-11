
function breaker(hex) {
  return {
    red: hex.substr(0, 2),
    green: hex.substr(2, 2),
    blue: hex.substr(4, 2)
  }
}

function hexDigitToDecimalDigit(hexDigit) {
  switch (hexDigit) {
    case 'F': return 15;
    case 'E': return 14;
    case 'D': return 13;
    case 'C': return 12;
    case 'B': return 11;
    case 'A': return 10;
    default: return parseInt(hexDigit);
  }
}

function hexToDecimal(hex) {
  var first = hexDigitToDecimalDigit(hex[0]);
  var second = hexDigitToDecimalDigit(hex[1]);
  return (first * 16) + second;
}

function hexToRGB(hex) {
  var pieces = breaker(hex);
  var red = hexToDecimal(pieces.red);
  var green = hexToDecimal(pieces.green);
  var blue = hexToDecimal(pieces.blue);

  return red + ', ' + green + ', ' + blue;
}
