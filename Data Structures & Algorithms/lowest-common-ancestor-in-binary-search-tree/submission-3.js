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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        // finding the split point
        if(!root || !q || !p) return null;

        if(p.val < root.val && q.val < root.val) {
            // look for the left
            return this.lowestCommonAncestor(root.left, p, q);
        } else if( p.val > root.val && q.val > root.val) {
            // look for the right
            return this.lowestCommonAncestor(root.right, p, q);
        } else {
            // split point
            return root
        }
    }
}
