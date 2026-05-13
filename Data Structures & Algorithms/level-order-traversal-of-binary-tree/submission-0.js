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
     * @return {number[][]}
     */
    levelOrder(root) {
        
        if(!root) return [];
        
        let result = [];
        let queue = [root];

        while(queue.length > 0) {
            let level = [];
            let size = queue.length;
            for(let i = 0; i < size; i++){
                let node = queue.shift();
                level.push(node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);               
            }

            if(level.length > 0) result.push(level);        
        }
        return result;
        
    }
}
