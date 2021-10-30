/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let copy = [...nums1], a = m - 1, b = n - 1;
    for(let i = m + n - 1; i >=0; i--) {
        if(b < 0) break;
        if(copy[a] > nums2[b] && a >= 0) {
            nums1[i] = copy[a];
            a--;
        } else {
            nums1[i] = nums2[b];
            b--;
        }
    }
}


