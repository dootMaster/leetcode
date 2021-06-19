/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let x = 0, y = 0;
    let joined = [];
    while(x < nums1.length || y < nums2.length) {
        if((nums1[x] < nums2[y]) || nums2[y] === undefined) {
            joined.push(nums1[x]);
            x++;
        } else if((nums1[x] > nums2[y]) || nums1[x] === undefined) {
            joined.push(nums2[y]);
            y++;
        } else if(nums1[x] === nums2[y]) {
            joined.push(nums1[x]);
            joined.push(nums2[y]);
            x++;
            y++;
        }
    }
    
    if(joined.length % 2 === 0) {
        return (joined[(joined.length/2) - 1] + joined[(joined.length/2)]) / 2;
    } else {
        return joined[Math.ceil(joined.length/2) - 1];
    }
};