

describe('An array', function() {

  it('can return you the number of items in it.', function() {
    //The syntax of creating an array like this is called "array literal syntax".
    var arrayOfNumbers = [1, 2, 3, 4];

    //How can you get the number of items and put it in this variable?
    var theNumberOfItems;
    var theNumberOfItems = arrayOfNumbers.length;

    chai.assert.equal(theNumberOfItems, 4);
  });

  it('can get an item at its location using the indexer.', function() {
    var people = ['Bob', 'Joan', 'Artaxerxes', 'Fred'];

    //Use the (zero-based) indexer to get the item in the second location.
    var theSecondName = people[1];

    chai.assert.equal(theSecondName, 'Joan');
  });

  it('can get new items added to its end with push.', function() {
    var arrayOfNumbers = [2, 1, 3, 4];

    //Add the number "5" to this array with push.
    arrayOfNumbers.push(5);

    chai.assert.equal(arrayOfNumbers.length, 5);
    chai.assert.equal(arrayOfNumbers[4], 5);
  });


  it('can remove its last item and return it with pop.', function() {
    //This is the other way of creating arrays. It is way more verbose, so you will rarely see this.
    var arrayOfNumbers = new Array();
    arrayOfNumbers.push(1);
    arrayOfNumbers.push(2);
    arrayOfNumbers.push(3);
    arrayOfNumbers.push(4);

    //Use pop!
    var theLastItem;
    var theLastItem = arrayOfNumbers.pop();

    chai.assert.equal(arrayOfNumbers.length, 3);
    chai.assert.equal(theLastItem, 4);
  });

  it('can remove its first item and return it with shift.', function() {
    var arrayOfNumbers = [1, 2, 3, 4];

    //Use shift to remove the first item and put it in this variable.
    var theFirstItem;
    var theFirstItem = arrayOfNumbers.shift();

    chai.assert.equal(arrayOfNumbers.length, 3);
    chai.assert.equal(theFirstItem, 1);
  });

  it('can add an item on to the beginning with unshift.', function() {
    var arrayOfNumbers = [1, 3, 2, 4];

    //Use unshift to add a number to the beginning.
    arrayOfNumbers.unshift(0);

    chai.assert.equal(arrayOfNumbers.length, 5);
    chai.assert.equal(arrayOfNumbers[0], 0);
  });

  it('can add another array onto it with concat.', function() {
    var firstArray = [1, 2];
    var secondArray = [60, 61];

    //Use concat to combine the two arrays into one new array.
    var combinedArray;
    var combinedArray = firstArray.concat(secondArray);

    chai.assert.equal(combinedArray.length, 4);
  });

  it('can remove a chunk of itself and return that with splice.', function() {
    var people = ['Barbara', 'Bob', 'Joan', 'Artaxerxes', 'Fred', 'Frank', 'Martha'];

    //Use splice to remove Joan to Fred.
    var subset;
    var subset = people.splice(2, 3);

    chai.assert.equal(subset[0], 'Joan');
    chai.assert.equal(subset.length, 3);
    chai.assert.equal(people.length, 4);
  });

  it('can copy a subset of itself with slice.', function() {
    var people = ['Barbara', 'Bob', 'Joan', 'Artaxerxes', 'Fred', 'Frank', 'Martha'];

    //Use slice to copy Joan to Fred.
    var copiedSubset;
    var copiedSubset = people.slice(2, 5);

    chai.assert.equal(copiedSubset[0], 'Joan');
    chai.assert.equal(copiedSubset.length, 3);
    chai.assert.equal(people.length, 7);
  });

  it('can join its elements into a delimited string with join.', function() {
    var people = ['Bob', 'Joan', 'Artaxerxes', 'Fred'];

    //Use join to create a comma delimited string of the names.
    var string;
    var string = people.join(',');

    chai.assert.equal(string, 'Bob,Joan,Artaxerxes,Fred');
  });

  it('can give you the index of an item with indexOf.', function() {
    var people = ['Bob', 'Joan', 'Artaxerxes', 'Fred'];

    //At what index location is the string 'Artaxerxes'? Use indexOf to find out.
    var index;
    var index = people.indexOf('Artaxerxes');

    chai.assert.equal(index, 2);
  });

});
