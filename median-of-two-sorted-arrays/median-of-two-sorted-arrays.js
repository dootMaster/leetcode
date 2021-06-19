/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let joined = nums1.concat(nums2);
    
    joined.sort((a, b) => a - b);
    
    if(joined.length % 2 === 0) {
        return (joined[(joined.length/2) - 1] + joined[(joined.length/2)]) / 2;
    } else {
        return joined[Math.ceil(joined.length/2) - 1];
    }
};