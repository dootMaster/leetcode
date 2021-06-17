/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = [];
    for(let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;
    }
    for(let i = 0; i < nums.length; i++) {
        let y = target - nums[i];
        if(hash[y] && i !== hash[y]) {
            return [i, hash[y]];
        }
    }
};