class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {

        const ROWS = heights.length;
        const COLS = heights[0].length;

        let pacificReachable = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(false));
        let atlanticReachable = new Array(ROWS).fill(null).map(() => new Array(COLS).fill(false));

        const dfs = (r, c, prevHight, reachable) => {
            // base case: out of bound
            if(r < 0 || r >= ROWS || c < 0 || c >= COLS) return;
            // base case: visited 
            if(reachable[r][c]) return;
            // base case: lower
            if(heights[r][c] < prevHight) return;

            // found a valid cell
            reachable[r][c] = true;

            dfs(r + 1, c, heights[r][c], reachable);
            dfs(r - 1, c, heights[r][c], reachable);
            dfs(r, c + 1, heights[r][c], reachable);
            dfs(r, c - 1, heights[r][c], reachable);
        }

        // 反過來從沿岸海水倒灌往陸地淹，從不同海洋的岸邊淹上來的就代表該海洋的reachablility
        // 從上下沿岸
        for(let c = 0 ; c < COLS; c++){
            dfs(0, c, heights[0][c], pacificReachable);
            dfs(ROWS - 1, c, heights[ROWS - 1][c], atlanticReachable);
        }
        // 從左右沿岸
        for(let r = 0 ; r < ROWS; r++){
            dfs(r, 0, heights[r][0], pacificReachable);
            dfs(r, COLS - 1, heights[r][COLS - 1], atlanticReachable);
        }

        // 取pacificReachable跟atlanticReachable的交集
       let result = [];
       for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacificReachable[r][c] && atlanticReachable[r][c]) {
                    result.push([r, c]);
                }
            }
        }
        return result;
    }
}
