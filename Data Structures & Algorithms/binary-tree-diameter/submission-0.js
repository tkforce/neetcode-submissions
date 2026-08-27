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
    diameterOfBinaryTree(root) {
        // longest path for each node is the sum of left child max depth and right child max depth

        const maxDepth = (node) => {
            if(!node) return 0;

            return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
        }
        
        let diameter = 0;
        
        const dfs = (node) => {
            if(!node) return;
            let currDiameter = maxDepth(node.right) + maxDepth(node.left);
            diameter = Math.max(diameter, currDiameter);
         
            return Math.max(dfs(node.left),dfs(node.right))            
        }

        dfs(root);

        return diameter;

    }
}
