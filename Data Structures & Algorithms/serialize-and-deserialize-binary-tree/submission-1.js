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
        // turn it into pre-order list: [1,2,#,#,3,4,#,#,5,#,#]
        
        const result = [];
        const dfs = (node) => { 
            if(!node){
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
        //data: [1,2,#,#,3,4,#,#,5,#,#]
        let dataList = data.split(',');
        
        // let root = dataList.shift();
        // let root = null;
        const buildTree = () => {
            let curr = dataList.shift();
            if(curr !== '#') {
                let node = new TreeNode(curr);
                node.left = buildTree();
                node.right = buildTree();
                return node;
            } else{
                return null;
            }   
        }

        return buildTree();
    }
}
