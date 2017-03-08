

describe('Poker', function() {
  describe('calculateHand', function() {

    //NTK: Array iteration
    it('should indicate a pair with two 3s.', function() {

      var hand = [
        { suit: 'H', number: 7 },
        { suit: 'H', number: 3 },
        { suit: 'D', number: 3 },
        { suit: 'C', number: 5 },
        { suit: 'D', number: 9 }
      ];

      var result = calculateHand(hand);

      chai.assert.equal(result.type, 'pair');
    });

    it('should indicate a pair with two queens.', function() {

      var hand = [
        { suit: 'H', number: 7 },
        { suit: 'H', number: 'Q' },
        { suit: 'D', number: 'Q' },
        { suit: 'C', number: 5 },
        { suit: 'D', number: 9 }
      ];

      var result = calculateHand(hand);

      chai.assert.equal(result.type, 'pair');
    });

    it('should indicate three-of-a-kind with three queens.', function() {

      var hand = [
        { suit: 'H', number: 7 },
        { suit: 'H', number: 'Q' },
        { suit: 'D', number: 'Q' },
        { suit: 'C', number: 'Q' },
        { suit: 'D', number: 9 }
      ];

      var result = calculateHand(hand);

      chai.assert.equal(result.type, 'three-of-a-kind');
    });

    it('should indicate four-of-a-kind with four 9s.', function() {

      var hand = [
        { suit: 'S', number: 9 },
        { suit: 'H', number: 9 },
        { suit: 'D', number: 'Q' },
        { suit: 'C', number: 9 },
        { suit: 'D', number: 9 }
      ];

      var result = calculateHand(hand);

      chai.assert.equal('four-of-a-kind', result.type);
    });

    it('should indicate a flush with five clubs', function() {
      var hand = [
        { suit: 'C', number: 2 },
        { suit: 'C', number: 9 },
        { suit: 'C', number: 'Q' },
        { suit: 'C', number: 'K' },
        { suit: 'C', number: 7 }
      ];

      var result = calculateHand(hand);

      chai.assert.equal('flush', result.type);
    });

    it('should indicate a straight with five in a row', function() {
      var hand = [
        { suit: 'C', number: 'Q' },
        { suit: 'D', number: 'J' },
        { suit: 'C', number: 9 },
        { suit: 'C', number: 10 },
        { suit: 'C', number: 8 }
      ];

      var result = calculateHand(hand);

      chai.assert.equal('straight', result.type);
    });

    it('should indicate a straight flush when five in a row of the same suit', function() {
      var hand = [
        { suit: 'C', number: 'Q' },
        { suit: 'C', number: 'J' },
        { suit: 'C', number: 9 },
        { suit: 'C', number: 10 },
        { suit: 'C', number: 8 }
      ];

      var result = calculateHand(hand);

      chai.assert.equal('straight flush', result.type);
    });


  });

});
