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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
      let result = [];

        const dfs = (node) => {
            if(!node) {
                result.push('#');
                return;
            }
            result.push(node.val);
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);
        return result.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        // ["1", "2", "#", "#", "3", "#", "#"]
        const dataArr = data.split(',');
        
        const buildTree = () => {
            const currVal = dataArr.shift();
            if(currVal == '#') {
                return null;
            } else {
                const node = new TreeNode(currVal);
                node.left = buildTree();
                node.right = buildTree();
                return node;
            }      
        }

        return buildTree();
    }
}
