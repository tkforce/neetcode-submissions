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
        // BFS
        // 丟一個進去Queue，然後每次pop一個出來的同時把這個node的childern都push進去
        if(!root) return [];
        
        const queue = [root];
        const result = [];
        while(queue.length > 0) {
            const level = [];
            let size = queue.length; // 鎖住當下的size(一層的node數量)
            for(let i = 0 ; i < size ; i ++) {
                let node = queue.shift();
                level.push(node.val); // push all node from one level
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }
            if(level.length > 0) result.push(level)
        }
        return result;
    }
}
