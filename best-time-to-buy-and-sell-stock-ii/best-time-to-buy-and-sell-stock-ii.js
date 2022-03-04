/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i = 0; i < prices.length; i++) {
        let today = i, tomorrow = i+1;
        let expectedProfit = prices[tomorrow] - prices[today];
        if(expectedProfit > 0) {
            maxProfit += expectedProfit;
        }
    }
    return maxProfit;
};