/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let j = 1;
    let l = 1;
    while(j < nums.length) {
        if(nums[j] === nums[i]) {
            j++;
        } else {
            nums[i + 1] = nums[j];
            i++;
            l++;
        }
    }
    return l;
};