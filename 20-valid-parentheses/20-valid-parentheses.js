/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        
        if(s[i] === ')' && stack[stack.length - 2] === '(') {
            stack.pop();
            stack.pop();
        } else if(s[i] === '}' && stack[stack.length - 2] === '{') {
            stack.pop();
            stack.pop();
        } else if(s[i] === ']' && stack[stack.length - 2] === '[') {
            stack.pop();
            stack.pop();
        }
        console.log(stack)
    }
    return stack.length === 0;
};
