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
        // 複習
        // preorder是[root, left, right]: 用來找到root
        // inorder是[left, root, right]: 用來找到left & right tree
        // indexOf() bottleneck -> 轉成map
        // slice bottleneck -> 轉成傳遞index
        const inorderMap = new Map();
        inorder.forEach((val, idx) => inorderMap.set(val, idx));
        
        let preIndex = 0;
        
        const dfs = (inLeft, inRight) => {
            if(inLeft > inRight) return null;

            let root = new TreeNode(preorder[preIndex]);
            let mid = inorderMap.get(preorder[preIndex]);
            preIndex ++;
            root.left = dfs(inLeft, mid - 1);
            root.right = dfs(mid + 1, inRight);
            
            return root;
        }

        return dfs(0, inorder.length - 1);
    }
    
}
