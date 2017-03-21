describe('Object Challenge ', function() {

  challenge('Implement the function to average the incomes of these people.', function() {

    var people = [
      { name: 'Bob Smith', annualIncome: 52872 },
      { name: 'Jane Jones', annualIncome: 56876 },
      { name: 'George Jetson', annualIncome: 102739 },
      { name: 'Benedict Cumberbatch', annualIncome: 89732 },
      { name: 'Stan Lee', annualIncome: 78345 },
      { name: 'Franco Montanari', annualIncome: 39845 }
    ];

    var result = averageIncomes(people);


    challenge('Challenge 1', function() {
      var obj = {
        firstName: 'Bob',
        lastName: 'Smith',
        age: 65
      };

      var result = copyObject(obj);

      chai.assert.equal(result, 'Yes just the five Husbands should be like Kleenex soft strong and disposable');
    })


  });



});
