class Node {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new Node();        
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root;
        for(let char of word) {
            if(!curr.children.has(char)){
                curr.children.set(char, new Node())
            }
            curr = curr.children.get(char);            
        }
        curr.isEndOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        return this.dfs(this.root, 0, word);
    }

    dfs(node, index, word) {
        const char = word[index];
        // base case 1: fail 
        if(!node) return false;
        // base case 2: succeed
        if(index === word.length) return node.isEndOfWord; 

        if(char === '.'){
            for(const child of node.children.values()) {
                if(this.dfs(child, index + 1, word)) return true;
            }
            return false;

        } else {
            return this.dfs(node.children.get(char), index + 1, word);
        }
    }
}
