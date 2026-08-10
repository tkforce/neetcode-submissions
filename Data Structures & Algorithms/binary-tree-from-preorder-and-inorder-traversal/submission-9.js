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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        // four pointers
        // preorder是[root, left, right]: 用來找到root
        // inorder是[left, root, right]: 用來找到left & right tree
        // indexOf() bottleneck -> 轉成map
        // slice bottleneck -> 轉成傳遞index

        const inorderMap = new Map();
        inorder.forEach((val, idx) => inorderMap.set(val, idx));

        const dfs = (preStart, preEnd, inStart, inEnd) => {
            
            if(preStart > preEnd || inStart > inEnd) return null;
            
            let root = new TreeNode(preorder[preStart]);
            let mid = inorderMap.get(preorder[preStart]);
            let leftSize = mid - inStart;
            // build left
            root.left = dfs(preStart + 1, preStart + leftSize, inStart, mid - 1);
            // build right
            root.right = dfs(preStart + 1 + leftSize, preEnd, mid + 1, inEnd);

            return root;
        }
        return dfs(0, preorder.length - 1, 0, inorder.length - 1);
    }
}
