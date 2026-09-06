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

        const visited = new Map() // a map use 

        const dfs = (node) => {
            if(!node) return null;
            if(visited.has(node)) return visited.get(node); // return the copy that already being made.

            const copy = new Node(node.val);
            visited.set(node, copy);
            for(let neighbor of node.neighbors) {
                copy.neighbors.push(dfs(neighbor));
            }
            
            return copy;
        }

        return dfs(node);
    }
}
