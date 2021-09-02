/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let degrees = 0;
    let memo = {}, max = null;
    if(nums.length === 1) {
        return 1;
    }
    nums.forEach((item, i) => {
        if(memo[item] === undefined) {
            memo[item] = {val: 1, index: [i]};
        } else {
            memo[item].val++;
            memo[item].index.push(i);
        }
        if(memo[item].val > max) {
            max = memo[item].val;
        }
    });
    
    let min = Infinity;
  
    Object.values(memo).forEach(item => {
        console.log(item)
        if(item.val === max) {
            let left = item.index[0];
            let right = item.index[item.index.length - 1];
            if((right - left + 1 ) < min) min = right - left + 1;
        }
    })
    
    return min;
};