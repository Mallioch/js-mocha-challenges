//In this activity, you will have to look at some documentation and figure out the format!

describe('String Challenge ', function() {

  challenge('Implement this function that reverses a string.', function() {
    var str = 'Reverse me';
    var result = stringReverser(str);

    chai.assert.equal(result, 'em esreveR');
  });

  challenge('Implement this function to truncate a sentence to fifteen letters but add ellipses.', function() {
    var sentence = 'Captain America: Civil War was basically the best movie ever.';

    var result = truncate(sentence);

    chai.assert.equal(result, 'Captain America...');
  });

  challenge('Implement this function to truncate a sentence to the specified number of letters and add ellipses.', function() {
    var sentence = 'Gone Fishin with Danny Glover and Joe Pesci was possibly the worst movie I have ever eeen.';

    var result = truncateByCount(sentence, 10);
    chai.assert.equal(result, 'Gone Fishi...');

    var result = truncateByCount(sentence, 20);
    chai.assert.equal(result, 'Gone Fishin with Dan...');

  });


});
