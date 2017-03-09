

describe('A function for formatting names', function() {

  it('should space-delimit if all three values are present.', function() {
    var result = fullName('Bob', 'Smith', 'H.');
    chai.assert.equal(result, 'Bob H. Smith');
  });

  it('should leave out the middle initial if none is supplied.', function() {
    var result = fullName('Bob', 'Smith');
    chai.assert.equal(result, 'Bob Smith');
  });

  it('should leave out middle initial and last name if not supplied.', function() {
    var result = fullName('Ashurbanipal')
    chai.assert.equal(result, 'Ashurbanipal');
  });

});
