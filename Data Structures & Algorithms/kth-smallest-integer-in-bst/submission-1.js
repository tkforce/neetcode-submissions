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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let data = {count:0, result:null};
        this.dfs(root, k ,data);
        return data.result;
    }

    dfs(node, k, data){
        if(!node) return;
        this.dfs(node.left, k, data);
        data.count ++;
        
        if(data.count == k){
            data.result = node.val;
            return;
        }
        this.dfs(node.right,k , data);
    }
}
