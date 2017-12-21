
module.exports.profitsCalculator = () => {
  const getAllTheProfitsForOneValue = (a, arr) => 
  arr.reduce((acc, curr) => {
    return Math.max(acc, (curr - a));
  }, 0);

const getTheHighestProfit = (arr) => 
  arr.reduce((acc, curr, i) => {
    return Math.max(getAllTheProfitsForOneValue(curr, arr.slice(i+1, arr.length)), acc) || -1;
  }, 0);
  
  return {
    getAllTheProfitsForOneValue,
    getTheHighestProfit
  }
};
