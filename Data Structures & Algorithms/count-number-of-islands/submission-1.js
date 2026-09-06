class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        const COL = grid[0].length;
        const ROW = grid.length;
        
        const dfs = (r , c) => {
            if(r < 0 || r >= ROW || c < 0 || c >= COL) return;
            if(grid[r][c] === "0") return;
            
            grid[r][c] = "0" // flood the land
            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }


        for(let c = 0 ; c < COL; c ++) {
            for(let r = 0 ; r < ROW ; r ++) {
                if(grid[r][c] === "1") {
                    dfs(r, c);
                    count ++;
                } 
            }
        }

        return count;
    }
}
