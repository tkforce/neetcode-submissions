class Solution {
    
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {

        // countComponents就是Connected Components那題的解法，這邊直接搬過來用
        const countComponents = (n, edges) => {
            const graph = Array.from({ length: n }, () => []);
            for (const [a, b] of edges) {          // 無向圖 → 雙向都要加
                graph[a].push(b);
                graph[b].push(a);
            }

            const seen = new Array(n).fill(false);
            let count = 0;

            function dfs(node) {
                seen[node] = true;
                for (const nb of graph[node]) if (!seen[nb]) dfs(nb);
            }

            for (let i = 0; i < n; i++) {
                if (!seen[i]) { count++; dfs(i); }
            }
            return count;
        }

        // LC 261：是否為有效樹 = 連通 且 邊數 === n - 1
        if (edges.length !== n - 1) return false; // 條件 1：邊數
        return countComponents(n, edges) === 1;   // 條件 2：連通

    }
}
