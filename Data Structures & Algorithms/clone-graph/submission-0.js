/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        
        // const newNode = new Node();
        const visited = new Map();
        return this.dfs(node, visited);
    }

    dfs(node, visited) {
        
        if(!node) return null;

        if(visited.has(node)) return visited.get(node);

        const copy = new Node(node.val);
        visited.set(node, copy);
        
        for(const neighbor of node.neighbors){
            copy.neighbors.push(this.dfs(neighbor, visited));
        }

        return copy;
    }
}
