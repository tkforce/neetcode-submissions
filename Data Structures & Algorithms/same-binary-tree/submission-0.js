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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // if both are null.
        if(!p && !q) return true;
        // if one of them are null.
        if(!p || !q) return false;
        // if both are not null but the val are different.
        if(p.val !== q.val) return false;
        
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right); 
    }
}
