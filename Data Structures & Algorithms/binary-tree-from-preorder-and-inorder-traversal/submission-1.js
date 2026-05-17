/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(preorder.length == 0 || inorder.length == 0) return null;

        let root = new TreeNode(preorder[0]);
        let mid = inorder.indexOf(preorder[0]);
        // build left
        let leftPreorder = preorder.slice(1,mid+1)
        let leftInorder = inorder.slice(0,mid)
        root.left = this.buildTree(leftPreorder, leftInorder)
        // build right
        let rightPreorder = preorder.slice(mid+1)
        let rightInorder = inorder.slice(mid+1)
        root.right = this.buildTree(rightPreorder, rightInorder)

        return root;
    }
}
