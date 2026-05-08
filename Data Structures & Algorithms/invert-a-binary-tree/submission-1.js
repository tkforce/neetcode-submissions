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
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root) {

        if(!root) return null;
        if(!root.right && !root.left) return root;
        
        let temp = root.right;
        root.right = root.left;
        root.left = temp;
        this.invertTree(root.right);
        this.invertTree(root.left);

        return root;
    }
}
