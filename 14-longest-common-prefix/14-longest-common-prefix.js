/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) return '';
    
    return strs.reduce((a, b) => {
        let i = 0;
        while(a[i] && b[i] && a[i] === b[i]) {
            i++;
        }
        return a.slice(0, i);
    })
};