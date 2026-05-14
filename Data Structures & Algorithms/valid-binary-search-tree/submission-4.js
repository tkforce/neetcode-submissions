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
        return this.validate(root, -Infinity, Infinity)
    }

    validate(root, min, max) {
        // 空節點是合法的 BST
        if(!root) return true;
        // 檢查當前節點是否超出全局邊界
        if(root.val <= min || root.val >= max) return false;
        // 往左走：最大值變成 node.val
        // 往右走：最小值變成 node.val
        return this.validate(root.left, min, root.val) && 
               this.validate(root.right, root.val, max);
    }
}
