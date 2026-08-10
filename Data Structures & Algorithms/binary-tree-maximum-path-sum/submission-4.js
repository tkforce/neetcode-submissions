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
        // 思考:
        // 假設不是Tree而是一個Array要求最大連續Sum
        // 因為每一個start-end的配對代表一個獨立的結果，暴力解就是比較所有pair取最大的
        // 在Tree中每一個獨立的結果一定會有一個"最高點"->想成把每一個node當成最高點並找出最大值
        // 每個node為最高點的最大值是: node.val + max(node.right) + max(node.left)
        // max()的定義是: node.val + Math.max(max(left), max(right));
        
        let result = -Infinity;

        const getMax = (node) => {
            // get one side max
            if(!node) return 0;
            let rightMax = getMax(node.right);
            let leftMax = getMax(node.left);

            //replace outer dfs to update result directly here.
            result = Math.max(result, node.val + rightMax + leftMax);

            let path = node.val + Math.max(leftMax, rightMax);
            return Math.max(0, path); // if negative, return 0 instead
        }
        
        // const dfs = (node) => {
        //     if(!node) return;
            
        //     let curr = node.val + getMax(node.left) + getMax(node.right);
        //     result = Math.max(result, curr);
        //     //return result < 0 ? 0 : result;
        //     dfs(node.right);
        //     dfs(node.left);
        // }

        getMax(root);
        return result;
    }
}
