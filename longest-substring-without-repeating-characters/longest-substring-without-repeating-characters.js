/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let current = 0;
    let hashTracker = {};
    
    for (let i = 0; i < s.length; i++) {
        if(longest < s.length - i) {
            for(let ii = i; ii < s.length; ii++) {
                if(!hashTracker[s[ii]]) {
                    hashTracker[s[ii]] = true;
                    current ++;
                    if(current > longest) {
                        longest = current;
                    }
                } else if(hashTracker[s[ii]]) {
                    current = 0;
                    hashTracker = {};
                    break;
                }
            }
        }
    }
    return longest;
};