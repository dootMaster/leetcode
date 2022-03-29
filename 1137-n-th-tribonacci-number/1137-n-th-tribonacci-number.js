/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    if(n === 0) return 0;
    if(n === 1 || n === 2) return 1;
    
    let trib = [0, 1, 1];
    
    for(let i = 3; i <= n; i++) {
        trib.push(trib[i - 3] + trib[i - 2] + trib[i - 1]);
    }
    
    return trib[trib.length -1];
};