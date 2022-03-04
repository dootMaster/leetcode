/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const dfsHelper = (arr) => {
        if(!arr.length) return null;
        const root = postorder.pop();
        const indexOfRoot = arr.indexOf(root);
        const node = new TreeNode(root);
        node.right = dfsHelper(arr.slice(indexOfRoot + 1));
        node.left = dfsHelper(arr.slice(0, indexOfRoot));
        return node;
    }
    
    return dfsHelper(inorder);
};