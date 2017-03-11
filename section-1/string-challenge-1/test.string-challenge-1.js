//In this activity, you will have to look at some documentation and figure out the format!

describe('Strings - ', function() {

  t('Implement this function that reverses a string.', function() {
    var str = 'Reverse me';
    var result = stringReverser(str);

    chai.assert.equal(result, 'em esreveR');
  });



});
