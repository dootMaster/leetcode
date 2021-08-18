/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let memo = {};
    let common = {};
    for(let i = 0; i < list1.length; i++) {
        memo[list1[i]] = i;
    }
    let lowestSum = list1.length + list2.length;
    for(let i = 0; i < list2.length; i++) {
        if(memo[list2[i]] !== undefined) {
            memo[list2[i]] += i;
            common[list2[i]] = memo[list2[i]];
            if(memo[list2[i]] < lowestSum) {
                lowestSum = memo[list2[i]];
            }
        }
    }
    let results = [];
    for(let key in common) {
        if(common[key] === lowestSum) {
            results.push(key);
        }
    }
    
    
    return results;
};