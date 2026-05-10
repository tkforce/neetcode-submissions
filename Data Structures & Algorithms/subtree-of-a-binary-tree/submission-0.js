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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        
        if (!subRoot) {
            return true;
        }
        if (!root) {
            return false;
        }

        if(this.isSameTree(root,subRoot)) {
            return true;
        } 

        return (this.isSubtree(root.left, subRoot) || 
                this.isSubtree(root.right, subRoot))
        
    }


    isSameTree(root1, root2) {
        // if both null
        if(!root1 && !root2) return true;
        // if one of them are null
        if(!root1 || !root2) return false;
        // if the values are different
        if(root1.val !== root2.val) return false;

        return this.isSameTree(root1.left, root2.left) && 
            this.isSameTree(root1.right, root2.right)
    }
}
