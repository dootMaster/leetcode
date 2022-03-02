/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let map  = {};
    
    for (let i=0 ; i < nums.length; i++) {
        if (map[nums[i]] !== undefined) { // index for value (nums[i]) exists
            nums.splice(map[nums[i]], 1);
            i--; // decrease counter because of splice
            map[nums[i]] = i; // new index for value
        } else {
            map[nums[i]] = i; // record new index
        }
    }
    
    return nums.length;
};