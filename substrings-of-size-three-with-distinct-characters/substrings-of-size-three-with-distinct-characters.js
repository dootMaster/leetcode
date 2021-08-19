/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let result = 0;
    for(let i = 0; i < s.length-2; i++) {
        let memo = {};
        let count = 0;
        for(let j = i; j < i+3; j++) {
            if(!memo[s[j]]) {
                memo[s[j]] = true;
                count++;
            } else {
                break;
            }
        }
        if(count === 3) {
            result++;
        }
    }
    return result;
};