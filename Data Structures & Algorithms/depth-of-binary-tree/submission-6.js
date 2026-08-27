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
     * @return {number}
     */
    maxDepth(root) {
                const maxDepth = (node) => {
            if(!node) return 0;

            const l =  maxDepth(node.left);
            const r =  maxDepth(node.right);

            return 1 + Math.max(l, r);
        }

        return maxDepth(root);
    }
}
