/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let hash = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            hash.push(nums[i]);
        }
    }
    for(let i = 0; i < nums.length; i++){
        if(hash[i]) {
            nums[i] = hash[i];
        } else {
            nums[i] = 0;
        }
    }
};