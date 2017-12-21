var expect = require('expect.js');
var profitsCalculator = require('./app.js').profitsCalculator();

const prices = [45, 24, 35, 31, 40, 38, 11];
const noProfit = [44, 41, 37, 33, 32, 29, 22, 11];


describe('bitcoin profti maximisation', () => {
  it('returns -1 if there is no profit', () => {
    expect(profitsCalculator.getTheHighestProfit(noProfit)).to.be(-1);
  });

  it('returns 16 for [45, 24, 35, 31, 40, 38, 11]', () => {
    expect(profitsCalculator.getTheHighestProfit(prices)).to.be(16);
  });
});