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
        // use inorder DFS to traverse BST to get an ordered list
        //const list = [];
        let count = 0;
        let result = null;
        const dfs = (node) => {
            if(!node) return;
            dfs(node.left);
            count ++;
            //list.push(node.val);
            if(count == k) {
                result = node.val;
                return;
            }
            dfs(node.right);
        }
        dfs(root);

        return result; //list[k-1]
    }
}
