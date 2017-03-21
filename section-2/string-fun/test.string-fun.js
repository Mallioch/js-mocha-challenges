//In this activity, you will have to look at some documentation and figure out the format!

describe('String Challenge ', function() {

  challenge('Implement this function to camel-case a string.', function() {
    var phrase = 'The cheese is old and moldy';
    var result = camelCase(phrase);

    chai.assert.equal(result, 'theCheeseIsOldAndMoldy');
  })

  challenge('Implement this function to kabob-case a string.', function() {
    var phrase = 'The cheese is old and moldy';
    var result = kabobCase(phrase);

    chai.assert.equal(result, 'the-cheese-is-old-and-moldy');
  });


});
