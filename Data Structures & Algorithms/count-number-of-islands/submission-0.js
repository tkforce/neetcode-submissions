class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        // 先找到第一個1的格子，然後以他為起點遞迴往四方也是1的方向走
        // 每走一步都把那一步改成0以防走回頭路
        // 當走到沒有任一邊是1或是邊界的時候才停止
        // 這時就在result增加一座島
        const ROW = grid.length;
        const COL = grid[0].length;
        let islandCount = 0;

        const dfs = (r, c) => {
            
            // if hit boundary or sea (reach the end)
            if(r >= ROW || r < 0 || c >= COL || c < 0 || grid[r][c] === "0") return;

            // found "1" and turn to "0"
            grid[r][c] = "0";

            dfs(r + 1, c); 
            dfs(r - 1, c);
            dfs(r, c + 1);  
            dfs(r, c - 1);
        } 


        for(let r = 0; r < ROW; r ++){
            for(let c = 0; c < COL; c ++ ){
                if(grid[r][c] === "1") {
                    dfs(r, c);
                    islandCount ++;
                }
            }
        }

        return islandCount;      
    }


}
