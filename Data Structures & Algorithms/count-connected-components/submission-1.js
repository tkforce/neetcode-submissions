class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        // 就是找出不相連的區塊數量
        // 從任一點開始走dfs，邊走邊把走過的加入visited set，走到底後就result ++
        // 然後從還沒visited的點開始下一次dfs

        // build adj map
        const adjMap = new Map();
        for(let i = 0 ; i < n; i ++){
            adjMap.set(i,[]);
        }
        for(let [a,b] of edges) {
            adjMap.get(a).push(b);
            adjMap.get(b).push(a);
        }

        const visitedSet = new Set();
        let result = 0;

        const dfs = (node) => {
            
            const neighbors = adjMap.get(node);
            // base case: no more neighbors
            if(!neighbors) return;
            // base case: already visited
            if(visitedSet.has(node)) return;
            // valid
            visitedSet.add(node);
            for(let neighbor of neighbors){
                dfs(neighbor);
            }
            return;
        }

        for(let i = 0 ; i < n ; i ++) {
            if(!visitedSet.has(i)) {
                dfs(i);
                result ++;
            }
        }

        return result;
    }
}
