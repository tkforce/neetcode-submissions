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
        const list = [];
        const dfs = (node) => {
            if(!node) return;
            dfs(node.left);
            list.push(node.val);
            dfs(node.right);
        }
        dfs(root);

        return list[k-1]
    }
}
