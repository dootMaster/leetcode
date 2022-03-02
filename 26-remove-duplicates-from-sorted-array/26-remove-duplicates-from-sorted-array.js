/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if(nums.length === 1) return nums.length;
    
    let i = 0;
    let j = 1
    while(i < nums.length && j < nums.length) {
        if (nums[j] === nums[i]) {
            j++;
        }    
        else {
            nums[i+1] = nums[j]
            i++
        }    
    }
    return i + 1
};