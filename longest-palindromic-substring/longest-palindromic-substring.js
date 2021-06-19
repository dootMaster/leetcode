/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let oddPalindrome = '';
    let evenPalindrome = '';
    let comboLetter = s[0];
    let combo = '';
    let maxCombo = '';
    
    if(s.length === 1) {
        return s;
    }
    if(s.length === 2 && s[0] !== s[1]) {
        return s[0];
    } else if(s.length === 2 && s[0] === s[1]){
        return s;
    }
    
    
    for (let i = 0; i < s.length; i++) {
        let oddMirror = 1;
        let evenMirror = 1;
        if(s[i] === comboLetter) {
            combo+= s[i];
            if(combo.length > maxCombo.length) {
                maxCombo = combo;
            }
        } else {
            comboLetter = s[i];
            combo = comboLetter;
        }
        while(s[i-oddMirror] === s[i+oddMirror] && (i+oddMirror <= s.length)) {
            if(s.slice(i-oddMirror, i+oddMirror+1).length > oddPalindrome.length) {
                oddPalindrome = s.slice(i-oddMirror, i+oddMirror+1);
            }
            oddMirror++;
        }
        while(s[i-evenMirror] === s[i+1+evenMirror] && (i+1+evenMirror <= s.length) && s[i] === s[i+1]) {
            if(s.slice(i-evenMirror, i+evenMirror+2).length > evenPalindrome.length) {
                evenPalindrome = s.slice(i-evenMirror, i+evenMirror+2);
                console.log(evenPalindrome, i);
            }
            evenMirror++;
        }
        oddMirror = 0;
        evenMirror = 0;
    }
    let results = [oddPalindrome, evenPalindrome, maxCombo];
    console.log(results);
    results.sort((a, b) => a.length - b.length);
    
    return results[results.length-1];
};