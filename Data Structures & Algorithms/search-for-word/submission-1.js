class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;

        const startPositions = this.findStart(board, word[0]);
        if(startPositions.length == 0) return false;

             const dfs = (r, c, i) => {
            
            // base cases 1: 找到了
            if(word.length === i) return true;

            // base case 2: 失敗
            // 超出網格邊界，或是格子字母與目前要找的 word[i] 不吻合
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== word[i]) {
                return false;
            }

            // 前面沒有被擋下來，代表目前這個選擇是正確的
            // 1. 做標記：暫時存下正確字母，並把格子改成 '#' 防止這條路徑重複踩到它
            const temp = board[r][c];
            board[r][c] = '#';
            // 2. 鑽下去：放心地往「下、上、右、左」四個方向繼續比對下一個字母 (i + 1)
            const found = dfs(r+1, c, i+1) || // down
                          dfs(r, c+1, i+1) || // right
                          dfs(r-1, c, i+1) || // left
                          dfs(r, c-1, i+1); // up;

            // 3. 恢復現場：無論這條路通不通，離開前都要把字母填回去，留給其他起點機會
            board[r][c] = temp;

            return found;
        }


        for (const [r, c] of startPositions) {
            if (dfs(r, c, 0)) return true;
        }

        return false
    }

    findStart(board, char) {
        let startPositions = [];
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(char === board[i][j]) startPositions.push([i,j])
            }
        }
        return startPositions;
    }
}
