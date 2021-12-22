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
    let prev = null, currentNode = head;
    while(currentNode != null) {
        let nextTemp = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = nextTemp;
    }
    return prev;
}