class Node {
    constructor() {
        this.children = new Map();
        this.word = null; // save the entire word
    }
}

class Solution {    
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        // Key: In order to optimize words searching performance, instead of searching for each word seperatly,
        // we can use Trie struture to store all the words so that each step of navigate through the board,
        // we can check all the words simultaneously.  
        
        const result = [];
        const root = new Node();

        // step 1: turns words in to Trie structure
        for(const word of words){
            let curr = root;
            for(const char of word){
                if(!curr.children.has(char)) curr.children.set(char, new Node);
                curr = curr.children.get(char);
            }
            curr.word = word;
        }

        const ROWS = board.length;
        const COLS = board[0].length;

        // step 2: use DFS to navigate the board
        const dfs = (r, c, node) => {
            
            // Base case: fail
            // out of bound or is '#'
            if(c < 0 || r < 0 || r >= ROWS || c >= COLS || board [r][c] === '#') return;
            
            const char = board [r][c];
            // char dose not match
            if(!node.children.has(char)) return;

            const nextNode = node.children.get(char);
            
            if(nextNode.word) {
                result.push(nextNode.word);
                nextNode.word = null; // so other DFS triversal won't re-collect it.
            }
            
            // 原地網格標記 並暫存現場
            const temp = board[r][c];
            board[r][c] = '#';

            // 上下左右探索
            dfs(r + 1, c, nextNode);
            dfs(r - 1, c, nextNode);
            dfs(r, c + 1, nextNode);
            dfs(r, c - 1, nextNode);
            
            // 恢復現場 backtracking
            board[r][c] = temp;

        }

        // step 3: calling DFS for each cell of the board as starting point.
        for(let r = 0 ; r < ROWS ; r++){
            for(let c = 0 ; c < COLS ; c++){
                dfs(r, c, root);
            }
        }

        return result;
    }
}
