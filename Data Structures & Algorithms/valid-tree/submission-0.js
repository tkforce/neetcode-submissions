class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        // Valid Tree: 任兩個node之間互相連通且只能有一條路徑
        // 1. Connected: 所有點都互相連通，不能有孤立的部分
        // 2. Acyclic: 有cycle的話就代表兩點間有超過一條路徑的可能

        // 1. 建立adjlist: {0:[1,2,3],1:[0,4]...}
        //    任一個node沒有edge就可以early return -> 因為有孤立
        // 2. DFS走訪: 
        //    - 透過visitedSet來確定沒有cycle: 有重複的就return false
        //.   - 當從任一個起點出發

        // optimization
        if(edges.length !== n - 1) return false;

        // construct adjMap
        const adjMap = new Map();
        for(let i = 0 ; i < n; i ++) {
            adjMap.set(i, []);
        }
        for(let [n1, n2] of edges) {
            adjMap.get(n1).push(n2);
            adjMap.get(n2).push(n1);
        }
        
        const visitedSet = new Set();

        const dfs = (node) => {
            
            const neighbors = adjMap.get(node);
            // base case: if a node have no neighbors -> not connected
            // if(neighbors.length == 0) return false;
            // base case: if visited -> cycle exsited 
            if(visitedSet.has(node)) return; //false;
            
            // valid
            visitedSet.add(node);

            for(let neighbor of neighbors) {
                //if(!dfs(neighbor)) return false;
                dfs(neighbor);
            }

            // visitedSet.delete(node);
            
            return true;
        }

        if(!dfs(0)) return false;
        if(visitedSet.size !== n) return false;

        return true;
    }
}
