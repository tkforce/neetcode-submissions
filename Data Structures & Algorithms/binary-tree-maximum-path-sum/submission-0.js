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
    maxPathSum(root) {
        let maxResult = -Infinity;
        
        const dfs = (node) => {
            if(!node) return 0;

            let maxLeft = Math.max(0, dfs(node.left));
            let maxRight = Math.max(0, dfs(node.right));

            // 身份一: 如果該node是split node的狀況: 計算且update max path
            let splitMax = node.val + maxLeft + maxRight;
            maxResult = Math.max(splitMax, maxResult);

            // 身份二: 如果該node是path node的狀況: 回給parent最大值
            let pathMax = node.val + Math.max(maxLeft, maxRight);
            return pathMax; 
        }
        dfs(root);


        return maxResult;
    }
}
