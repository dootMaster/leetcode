/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head) return true;
    
    let mid = findMid(head);
    let reverseLatterHalf = reverseList(mid.next);
    
    let l = head, r = reverseLatterHalf, result = true;
    
    while (result && r != null) {
        if(l.val != r.val) result = false;
        l = l.next;
        r = r.next;
    }
    
    mid.next = reverseList(reverseLatterHalf);
    return result;
};

const findMid = (head) => {
    let fast = head, slow = head;
    while(fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

const reverseList = (head) => {
    let prev = null, current = head;
    while(current) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    return prev;
}