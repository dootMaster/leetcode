/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let currentNode = head;
    let values = [];
    while(currentNode) {
        values.push(currentNode.val);
        currentNode = currentNode.next;
    }

    currentNode = head;
    while(values.length) {
        currentNode.val = values.pop();
        currentNode = currentNode.next;
    }
    return head;
};