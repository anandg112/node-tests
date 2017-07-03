const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it(' should add two numbers',  () => {
      var res = utils.add(33, 11);
      expect(res).toBe(44).toBeA('number');
    });

    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  it('should async square two numbers', (done) => {
      utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
      });
  });

  it('should square a number', () => {
    var res = utils.square(9);
    expect(res).toBe(81).toBeA('number');

  });

  //should verify first and last names are set
  //assert it includes firstName and lastName with proper values

  it('should have first and last name', () => {
    var user = {
      age: 25,
      location: 'Toronto'
    };
    var res = utils.setName(user, 'Anand Gautam');
    expect(res).toInclude({
      firstName: 'Anand',
      lastName: 'Gautam'
    });
  });
});


// it('should expect some values', () => {
//   // expect(12).toNotBe(11);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([1, 2, 3, 4]).toInclude(4);
//   expect({
//     name: 'Anand',
//     age: 30,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   })
// });
