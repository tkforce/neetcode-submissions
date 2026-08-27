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
     * @return {boolean}
     */
    isValidBST(root) {

        // to narrow down the range when trivering downwards

        const dfs = (node, min, max) => {
            if(!node) return true; //reach the end -> so valid
            if(!(min < node.val && node.val < max)) return false; //invalid
            
            const left = dfs(node.left, min, node.val);
            const right = dfs(node.right, node.val, max);

            return left && right;
        }

        return dfs(root, -Infinity, Infinity);
    }
}
