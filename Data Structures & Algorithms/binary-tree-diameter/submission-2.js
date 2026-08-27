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
        let diameter = 0;

        const maxDepth = (node) => {
            if(!node) return 0;
            
            let l = maxDepth(node.left);
            let r = maxDepth(node.right);
            // 在探索maxDepth的同時就順便更新結果，不用再用一個DFS針對每個node做maxDepth
            diameter = Math.max(diameter, l + r);

            return 1 + Math.max(l, r);
        }
        maxDepth(root);
        
        // const dfs = (node) => {
        //     if(!node) return;
        //     let currDiameter = maxDepth(node.right) + maxDepth(node.left);
        //     diameter = Math.max(diameter, currDiameter);
         
        //     return Math.max(dfs(node.left),dfs(node.right))            
        // }

        // dfs(root);

        return diameter;
        
    }
}
