

describe('Hexidecimal converter', function() {
  describe('breaker', function() {

    it('can break six-digit hexidecimal into 3 blocks of RGB.', function() {

      var hex = 'FF7700';

      var result = breaker(hex);

      chai.assert.equal(result.red, 'FF');
      chai.assert.equal(result.green, '77');
      chai.assert.equal(result.blue, '00');
    });

  });

  describe('hexDigitToDecimalDigit', function() {

    it('can turn F into 15', function() {
      var hex = 'F';
      var decimal = hexDigitToDecimalDigit(hex);
      chai.assert.equal(decimal, 15);
    });

    it('can turn A into 10', function() {
      var hex = 'A';
      var decimal = hexDigitToDecimalDigit(hex);
      chai.assert.equal(decimal, 10);
    });

  });

  describe('hexToDecimal', function() {

    it('can turn FF into 255', function() {
      var hex = 'FF';
      var decimal = hexToDecimal(hex);
      chai.assert.equal(decimal, 255);
    });

    it('can turn 77 into 119', function() {
      var hex = '77';
      var decimal = hexToDecimal(hex);
      chai.assert.equal(decimal, 119);
    });

    it('can turn 01 into 1', function() {
      var hex = '01';
      var decimal = hexToDecimal(hex);
      chai.assert.equal(decimal, 1);
    });
  });

  describe('hexToRGB', function() {

    it('can convert FFFFFF to 255, 255, 255.', function() {
      var hex = 'FFFFFF';
      var rgb = hexToRGB(hex);
      chai.assert.equal(rgb, '255, 255, 255');
    });

    it('can convert 000000 to 0, 0, 0.', function() {
      var hex = '000000';
      var rgb = hexToRGB(hex);
      chai.assert.equal(rgb, '0, 0, 0');
    });

    it('can convert 77A72C to 119, 167, 44.', function() {
      var hex = '77A72C';
      var rgb = hexToRGB(hex);
      chai.assert.equal(rgb, '119, 167, 44');
    });

  });


});
