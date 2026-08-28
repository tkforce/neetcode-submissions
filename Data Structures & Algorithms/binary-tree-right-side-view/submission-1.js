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
     * @return {number[]}
     */
    rightSideView(root) {
        // use BFS and only collect the last one of that level

        if(!root) return [];
        const result = [];
        const queue = [root];
        let head = 0;
        while(head < queue.length) {
            let size = queue.length - head;
            let level = [];
            for(let i = 0 ; i < size ; i ++){
                let node = queue[head];
                level.push(node.val);
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                head++
            }

            result.push(level.pop()); // only collect the last one
        }
       return result;
    }
}
