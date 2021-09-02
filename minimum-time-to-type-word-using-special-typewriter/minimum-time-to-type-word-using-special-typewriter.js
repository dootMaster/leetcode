/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    let seconds = 0;
    let str = '';
    let currentLetter = 'a';
    let i = 0;
    
    while(str !== word) {
        console.log(currentLetter, word[i]);
        if(currentLetter !== word[i]) {
            seconds += findDistance(currentLetter, word[i]);
            currentLetter = word[i];
        }
        else if(currentLetter === word[i]) {
            seconds++;
            str += word[i];
            i++;
        }
        
        console.log(seconds);
    }
    
    return seconds;
};
    
const findDistance = (current, target) => {
    const chart = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13,
        n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    
    if(Math.abs(chart[target] - chart[current]) === 13) {
        console.log('distance 13');
        return 13; 
    }
    else if(Math.abs(chart[target] - chart[current]) <= 12) {
        console.log('distance < 13');
        return Math.abs(chart[target] - chart[current]);
    }
    else  if(Math.abs(chart[target] - chart[current]) > 13) {
        console.log('distance > 13');
        return 26 - Math.abs(chart[target] - chart[current]);
    }
}