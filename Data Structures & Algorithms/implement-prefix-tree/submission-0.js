class Node {
    constructor() {
        this.childern = new Map(); // use char as key and node as value 
        this.endOfWord = false; // a flag to make sure the search is done.
    }
}

class PrefixTree {
    constructor() {
        this.root = new Node();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for(let c of word) {
            if(!curr.childern.has(c)){
                curr.childern.set(c, new Node());
            }
            curr = curr.childern.get(c);
        }
        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        
        let curr = this.root;
        for(let c of word){
            if(!curr.childern.has(c)){
                return false;
            }
            curr = curr.childern.get(c);
        }
        return curr.endOfWord; // return the last char of the word's endOfWord value 
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        
        let curr = this.root;
        for(let c of prefix){
            if(!curr.childern.has(c)){
                return false;
            }
            curr = curr.childern.get(c);
        }
        return true;
    }
}
